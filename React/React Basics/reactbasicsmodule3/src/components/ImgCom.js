import insta from "../Assets/ins.jpeg";

export default function ImgCom() {
  const randomUrl =
    "https://t4.ftcdn.net/jpg/05/72/82/85/360_F_572828530_ofzCYowQVnlOwkcoBJnZqT36klbJzWdn.jpg";

  return (
    <div>
      <img height={200} src={require("../Assets/fb.png")} alt="Facebook img" />
      <img height={200} src={insta} alt="Insta img" />
      <img height={200} src={randomUrl} alt="Cool pic" />
    </div>
  );
}
