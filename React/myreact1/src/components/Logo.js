import car from "../assets/car.png";
const CurrentLogo = () => {
  const userPic = <img src={car} alt="car img not loaded" />;
  return userPic;
};
function Logo(props) {
  const userPic = <img src={props.car} alt="car img not loaded" />;
  return userPic;
}
export { Logo, CurrentLogo };
