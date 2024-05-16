import {PhoneIcon} from '@heroicons/react/24/solid';
// type
interface Props {
  call: string;
  phone: string;
}

export default function ToolTipsContact(props: Props) {
  return (
    <div className="tooltip-container">
      <div className="tooltip">
        <div className="profile">
          <div className="user">
            <div className="img2 font-semibold capitalize">{props.phone}</div>
          </div>
        </div>
      </div>
      <div className="text">
        <span className="icon">
          <div className="layer">
            <span />
            <span />
            <span />
            <span />
            <span className="fab">
              <PhoneIcon />
            </span>
          </div>
          <div className="text">{props.call}</div>
        </span>
      </div>
    </div>
  );
}
