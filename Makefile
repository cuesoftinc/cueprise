archive:
	cd build; zip -r "../build.zip" .

deploy:
	make archive
	$(eval JOB=$$(aws amplify create-deployment --app-id ${APP_ID} --branch-name main))
	$(eval JOB_ID=$$(${JOB} | jq -r '.jobId'))
	$(eval UPLOAD_URL=$$(${JOB} | jq -r '.zipUploadUrl'))
	curl -H "Content-Type: application/zip" "${UPLOAD_URL}" --upload-file "build.zip"
	aws amplify start-deployment --app-id ${APP_ID} --branch-name main --source-url ${UPLOAD_URL}
	while [[ "$$(aws amplify get-job --app-id ${APP_ID} --branch-name main --job-id ${JOB_ID} | jq -r '.job.summary.status')" =~ ^(PENDING|RUNNING)$ ]]; do sleep 1; done
	$(eval JOB_STATUS=$$(aws amplify get-job --app-id ${APP_ID} --branch-name main --job-id ${JOB_ID} | jq -r '.job.summary.status'))
	echo "Job status is ${JOB_STATUS}"
