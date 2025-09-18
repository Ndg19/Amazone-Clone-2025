import { FadeLoader } from "react-spinners";

const Loader = ({ loading = true }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 9999,
      }}
    >
      <FadeLoader color="#ff9900" loading={loading} />
    </div>
  );
};

export default Loader;
