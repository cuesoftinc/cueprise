archive:
	cd build; zip -r "../build.zip" .

deploy:
	JOB=$(aws amplify create-deployment --app-id ${APP_ID} --branch-name main)
	JOB_ID=$(${JOB} | jq -r '.jobId')
	UPLOAD_URL=$(${JOB} | jq -r '.zipUploadUrl')
	curl -H "Content-Type: application/zip" "${UPLOAD_URL}" --upload-file "build.zip"
	aws amplify start-deployment --app-id ${APP_ID} --branch-name main --source-url ${UPLOAD_URL}
	while [[ "$(aws amplify get-job --app-id ${APP_ID} --branch-name main --job-id ${JOB_ID} | jq -r '.job.summary.status')" =~ ^(PENDING|RUNNING)$ ]]; do sleep 1; done
	JOB_STATUS="$(aws amplify get-job --app-id ${APP_ID} --branch-name main --job-id ${JOB_ID} | jq -r '.job.summary.status')"
	echo "Job status is ${JOB_STATUS}
