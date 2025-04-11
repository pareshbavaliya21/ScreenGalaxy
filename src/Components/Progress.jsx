const Progressbar123 = () => {
  return (
    <>
      <div
        className="progress"
        role="progressbar"
        aria-label="Danger example"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="progress-bar bg-danger"
          style={{ width: " 50%", height: "50%" }}
        >
          100%
        </div>
      </div>
    </>
  );
};
export default Progressbar123;
