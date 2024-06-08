type Template = {
  _id?: string;
  cardName: string;
  price: number;
  url: string;
  color_f: string;
  color_s: string;
  btn_name: string;
  keywords: string;
  new: boolean;
  onClick: () => void;
};

const ReportCard: React.FC<Template> = ({
  _id,
  cardName,
  price,
  url,
  color_f,
  color_s,
  btn_name,
  keywords,
  new: isNew,
  onClick = () => {},
}) => {
  return (
    <div onClick={onClick} className="card">
      <div className="card-front">
        <div
          className="card-front__tp card-front__tp--ski"
          data-card-bg=""
          style={{
            backgroundImage: `linear-gradient(${color_f}, ${color_s}`,
          }}>
          <span
            className="material-symbols-outlined mb-3"
            style={{
              color: "black",
              //   fontWeight: "bold"
            }}>
            lab_profile
          </span>
          <h2 className="card-front__heading" card-title="">
            {cardName}
          </h2>
          <p className="card-front__text-price" card-price="">
            Rs. {price} /-
          </p>
        </div>
        <div className="card-front__bt" card-bottom-white="">
          <p
            className="card-front__text-view card-front__text-view--ski"
            card-btn-text=""
            style={{ color: "rgb(69, 179, 193)" }}>
            Use This
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
