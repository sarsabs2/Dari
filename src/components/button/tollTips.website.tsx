import {IdentificationIcon} from '@heroicons/react/24/solid';
// type
interface Props {
  viewDetaile: string;
  title: string;
}

export default function ToolTipsWebsite(props: Props) {
  return (
    <div className="tooltip-container">
      <div className="tooltip">
        <div className="profile">
          <div className="user">
            <div className="img2 font-semibold capitalize">{props.title}</div>
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
              <IdentificationIcon />
            </span>
          </div>
          <div className="text">{props.viewDetaile}</div>
        </span>
      </div>
    </div>
  );
}
