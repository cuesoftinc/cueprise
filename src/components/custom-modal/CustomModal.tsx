import React from "react";

type myProps = {
  openModal: boolean;
  closeModal: () => void;
};

export const CustomModal = ({ openModal, closeModal }: myProps) => {
  const handleCloseModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = e.target as HTMLDivElement;
    if (target.id === "modal-backdrop") closeModal();
  };

  if (!openModal) return null;

  return (
    <div
      id="modal-backdrop"
      className="bg-black fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      onClick={handleCloseModal}
    >
      <div className="w-[85%] h-[50%] md:w-1/2 md:h-1/2">
        <iframe
          className="w-full h-full"
          title="cueprise-product-demo-video"
          name="demo-iframe"
          src="https://www.youtube.com/embed/WiaBlUBXvY8"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
