import "./box-data.styles.scss";

const BoxData = (props) => {
  const { img, title, description } = props.itemData;
  return (
    <div className="box-data-container">
      <div className="img-container">
        <img src={img} alt={title} width="50px" height="50px" />
      </div>
      <div className="title-container">
        <h2>{title}</h2>
      </div>
      <div className="description-container">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BoxData;
