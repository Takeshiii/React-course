import { Button } from "../Button/component";
import { useState } from "react";
import { ReviewForm } from "../ReviewForm/component";
import { Modal } from "../Modal/component";

export const AddReviewButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button title={"Add new review"} onClick={() => setIsModalOpen(true)} />
      {isModalOpen && (
        <Modal>
          <ReviewForm onSubmit={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </>
  );
};
