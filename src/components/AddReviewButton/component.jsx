import { useState } from "react";
import { Button } from "../Button/component";
import { Modal } from "../Modal/component";
import { ReviewFormContainer } from "../ReviewForm/container";

export const AddReviewButton = ({ restaurantId }) => {
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
          <ReviewFormContainer
            onClose={() => setIsModalOpen(false)}
            restaurantId={restaurantId}
          />
        </Modal>
      )}
    </>
  );
};
