/* eslint-disable react/prop-types */
export const Notify = ({ errorMessage }) => {
  if (!errorMessage) return null;

  return (
    <div className="notify-container">
      <span>{errorMessage}</span>
    </div>
  );
};
