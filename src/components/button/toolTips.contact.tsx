// imort Icon from Hero Icon
import {PhoneIcon} from '@heroicons/react/24/solid';
import clsx from 'clsx';

// type
interface Props {
  call: string;
  phone: string;
  state: boolean;
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
      <div className="text text-[#1da1f2] ">
        <span className="icon ">
          <div className="layer ">
            <span />
            <span />
            <span />
            <span />
            <span className="fab">
              <PhoneIcon
                className={clsx('', {
                  'text-red-500 border  border-red-500': props.state === false,
                  'text-[#1da1f2] border  border-cyan-500': props.state === true
                })}
              />
            </span>
          </div>
          <div className="text">
            <h5
              className={clsx('', {
                'text-red-500 ': props.state === false,
                'text-[#1da1f2] ': props.state === true
              })}
            >
              {props.call}
            </h5>
          </div>
        </span>
      </div>
    </div>
  );
}
