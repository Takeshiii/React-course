import { useState } from "react";
import { Button } from "../Button/component";
import { ReviewForm } from "../ReviewForm/component";
import { Modal } from "../Modal/component";

export const AddReviewButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        size="medium"
        title="Add new review"
        onClick={() => setIsModalOpen(true)}
      />
      {isModalOpen && (
        <Modal>
          <ReviewForm onSubmit={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </>
  );
};
