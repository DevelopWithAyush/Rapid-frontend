import React, { useContext, useEffect } from "react";
import { IoMdNotifications } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HandleContext } from "../../hooks/HandleState";
import Notification from "../dialog/Notification";
import ProfileCard from "../dialog/ProfileCard";
import { incrementNotification, resetNotificationCount } from "../../redux/reducers/chat";
import { NEW_REQUEST } from "../../constants/events";
import { getOrSaveFromLocalStorage } from "../features/features";
const Header = () => {
  const { profile, setProfile, setWrapped, isNoti, setIsNoti } =
    useContext(HandleContext);

  const { user } = useSelector((state) => state.auth);
  const { notificationCount } = useSelector((state) => state.chat);

  const dispatch = useDispatch()
  // const { api } = useSelector((state) => state)
  useEffect(() => {
    getOrSaveFromLocalStorage({ key: NEW_REQUEST, value: notificationCount })


  }, [notificationCount])
  return (
    <>
      <header className="h-[10%] flex flex-row items-center justify-between px-6 lg:pr-12">
        <Link to={"/"} className="flex gap-2">
          {" "}
          <Logo />{" "}
          <span className="text-white text-[24px] font-bold leading-6">
            Rapid
          </span>
        </Link>
        <div className=" flex  h-full items-center justify-center gap-10 lg:gap-16  ">
          <div className=" relative h-auto w-auto">
            <IoMdNotifications
              className="text-[24px]"
              onClick={() => {
                dispatch(resetNotificationCount())
                setIsNoti(!isNoti);
                setWrapped(true);
              }}
            />
            {notificationCount !== 0 && (
              <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-6 rounded-full text-[12px] p-[2px] aspect-square flex flex-col items-center justify-center  bg-red-500  ">
                {notificationCount/2 >99 ? "99+ ":notificationCount/2}
              </div>
            )}
            <Notification />
          </div>
          <div
            onClick={() => {
              setProfile(true);
              setWrapped(true);
            }}
            className="w-10 lg:w-12 h-10 lg:h-12 rounded-full overflow-hidden flex"
          >
            <img src={user?.avatar?.url} alt={user?.avatar?.public_id} />
          </div>
        </div>
      </header>

      {profile && <ProfileCard />}
    </>
  );
};

const Logo = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
      >
        <path
          d="M9.39383 24.0737C8.86091 23.9152 8.31518 23.7901 7.79785 23.5911C6.8386 23.2222 5.93887 22.7363 5.097 22.1376C4.48361 21.7013 3.91978 21.7149 3.30867 22.263C2.96356 22.5726 2.64944 22.9167 2.29685 23.2368C2.23889 23.1906 2.20995 23.1472 2.17128 23.1158C1.71385 22.7444 1.26049 22.3676 0.794224 22.0076C0.544841 21.8151 0.272555 21.6522 0.0106043 21.4759C0.00820739 19.6804 0.00581044 17.8849 0.0240914 16.0693C0.293591 16.2337 0.542063 16.4187 0.791329 16.6025C1.06671 16.8056 1.34281 17.0077 1.62221 17.2338C1.62583 18.6726 1.62583 20.0879 1.62583 21.5057C1.97137 21.2101 2.28407 20.9202 2.62027 20.6608C3.05062 20.3287 3.56699 20.2002 4.09542 20.1658C4.36954 20.148 4.65009 20.229 4.92887 20.2834C4.96846 20.3635 4.99364 20.4421 5.04731 20.4854C6.28485 21.4842 7.52777 22.4764 8.76348 23.4776C8.98753 23.6591 9.18441 23.8741 9.39383 24.0737Z"
          fill="#FF4900"
        />
        <path
          d="M9.40407 24.0913C9.18437 23.874 8.9875 23.6589 8.76345 23.4774C7.52774 22.4763 6.28482 21.4841 5.04727 20.4852C4.99361 20.4419 4.96843 20.3633 4.94879 20.2794C5.00011 20.2625 5.03339 20.2642 5.06501 20.2723C5.71003 20.4385 6.21012 20.8715 6.7603 21.208C7.72372 21.7972 8.76013 22.1911 9.86185 22.4572C9.88169 22.4757 9.89487 22.4834 9.908 22.4893C9.90649 22.4899 9.90777 22.4869 9.91025 22.5044C9.98629 22.612 10.0471 22.718 10.1355 22.7899C10.7297 23.2735 11.3306 23.7489 11.9268 24.2301C11.989 24.2803 12.0346 24.3511 12.0879 24.4124C11.5529 24.3671 11.017 24.3312 10.4834 24.2734C10.1253 24.2346 9.77056 24.1649 9.40407 24.0913Z"
          fill="#FF4900"
        />
        <path
          d="M23.4038 7.35853C23.5422 7.7157 23.6806 8.07287 23.8086 8.45971C23.7177 8.45439 23.6245 8.4351 23.5585 8.38198C22.8985 7.85036 22.2466 7.30853 21.5836 6.78079C21.4168 6.64805 21.218 6.55544 21.0261 6.4285C20.4459 5.64448 19.8829 4.86686 19.1232 4.26576C18.7078 3.93712 18.2975 3.59602 17.8507 3.31483C17.3369 2.99146 16.7853 2.72808 16.2474 2.42106C16.2009 2.34357 16.1675 2.27078 16.1116 2.22573C15.4718 1.70925 14.8231 1.20367 14.1892 0.680044C13.9623 0.492545 13.7691 0.264164 13.5605 0.0544434C13.8685 0.102388 14.1764 0.150332 14.5088 0.219033C14.7376 0.424683 14.9343 0.619105 15.1478 0.792905C16.4151 1.82473 17.6852 2.85325 18.9566 3.88002C20.1494 4.84326 21.3422 5.80665 22.5417 6.76139C22.8146 6.97859 23.1157 7.16042 23.4038 7.35853Z"
          fill="#FF4900"
        />
        <path
          d="M12.1112 24.4161C12.0346 24.3511 11.989 24.2803 11.9268 24.2301C11.3306 23.7489 10.7297 23.2735 10.1355 22.7899C10.0471 22.7179 9.98631 22.612 9.93176 22.5061C10.3354 22.5466 10.7188 22.6151 11.1051 22.6555C11.52 22.699 11.9373 22.7255 12.3542 22.7409C12.5694 22.7488 12.786 22.7167 13.0031 22.7206C13.0472 22.8083 13.0758 22.8953 13.1356 22.9448C13.4146 23.1758 13.7067 23.391 13.9852 23.6226C14.1894 23.7925 14.3797 23.9792 14.5761 24.1584C14.3121 24.2118 14.0502 24.289 13.7835 24.3135C13.2352 24.3639 12.6843 24.3861 12.1112 24.4161Z"
          fill="#FF4900"
        />
        <path
          d="M23.407 7.33981C23.1157 7.16029 22.8146 6.97846 22.5417 6.76126C21.3421 5.80652 20.1494 4.84313 18.9566 3.87989C17.6852 2.85312 16.4151 1.8246 15.1477 0.792776C14.9343 0.618976 14.7376 0.424554 14.5293 0.223145C14.8594 0.275753 15.1934 0.344879 15.5278 0.442863C15.5527 0.517853 15.566 0.577634 15.6033 0.608122C16.5633 1.39331 17.5238 2.178 18.4884 2.95748C19.7747 3.9968 21.0626 5.03406 22.3548 6.06593C22.5554 6.22611 22.7826 6.3529 22.9975 6.49513C23.1351 6.77049 23.2727 7.04585 23.407 7.33981Z"
          fill="#FF4900"
        />
        <path
          d="M2.48447 4.86807C2.98726 4.30912 3.48724 3.7476 3.99494 3.19315C4.11198 3.06533 4.25549 2.96174 4.40586 2.85693C4.66137 3.07828 4.90147 3.28581 5.13311 3.5024C5.30819 3.66611 5.47245 3.8414 5.63347 4.02693C5.43989 4.19505 5.23702 4.3312 5.0723 4.50377C4.65699 4.93886 4.25888 5.39037 3.83711 5.83137C3.63897 5.69414 3.45889 5.55906 3.27592 5.428C3.0132 5.23982 2.74839 5.05457 2.48447 4.86807Z"
          fill="#FF4900"
        />
        <path
          d="M24.3687 11.1672C24.3685 11.9212 24.3683 12.6752 24.3314 13.4404C24.0654 13.2881 23.8382 13.1214 23.6062 12.962C23.3213 12.7661 23.0323 12.5763 22.7479 12.3613C22.7085 11.4846 22.6581 10.6315 22.4738 9.79712C22.7931 10.0203 23.0936 10.2436 23.396 10.4642C23.7193 10.6999 24.0444 10.933 24.3687 11.1672Z"
          fill="#FF4900"
        />
        <path
          d="M5.64154 4.01149C5.47246 3.84136 5.3082 3.66607 5.13312 3.50236C4.90148 3.28577 4.66138 3.07825 4.42133 2.84919C4.93518 2.4613 5.45121 2.08906 5.9712 1.72242C6.07733 1.64758 6.19831 1.5938 6.34357 1.53174C6.838 1.9078 7.30131 2.28243 7.7501 2.6696C6.98992 3.05021 6.28541 3.48309 5.64154 4.01149Z"
          fill="#FF4900"
        />
        <path
          d="M0.00695567 21.4993C0.272536 21.652 0.544822 21.8149 0.794205 22.0075C1.26047 22.3675 1.71383 22.7442 2.17126 23.1156C2.20993 23.147 2.23887 23.1904 2.28102 23.2433C1.98261 23.5719 1.68553 23.8961 1.36519 24.1955C1.10786 24.436 0.781678 24.4294 0.47507 24.3183C0.157138 24.2032 -0.00340247 23.9563 5.46662e-05 23.6042C0.00686697 22.9105 0.00285838 22.2166 0.00695567 21.4993Z"
          fill="#FF4900"
        />
        <path
          d="M2.46896 4.87598C2.7484 5.05451 3.01322 5.23976 3.27593 5.42794C3.4589 5.559 3.63898 5.69409 3.83586 5.84858C3.80369 5.92692 3.74719 5.97882 3.7097 6.04199C3.34946 6.64898 2.99243 7.25787 2.6174 7.86265C2.52257 7.81185 2.43932 7.77167 2.36799 7.71617C1.99896 7.42905 1.63297 7.13801 1.26593 6.84834C1.63612 6.23563 2.0063 5.62291 2.37652 5.01022C2.40201 4.96803 2.4278 4.92603 2.46896 4.87598Z"
          fill="#FF4900"
        />
        <path
          d="M7.76462 2.65698C7.30131 2.28235 6.838 1.90771 6.35983 1.5242C7.00974 1.13364 7.70336 0.818333 8.46431 0.618652C8.53194 0.693109 8.5663 0.764663 8.62189 0.810435C8.91913 1.05518 9.22751 1.28667 9.51966 1.53719C9.64621 1.6457 9.74307 1.78885 9.83561 1.92528C9.1334 2.17519 8.44901 2.41609 7.76462 2.65698Z"
          fill="#FF4900"
        />
        <path
          d="M13.5385 0.0509593C13.7691 0.26414 13.9623 0.49252 14.1893 0.680019C14.8231 1.20365 15.4718 1.70922 16.1116 2.2257C16.1675 2.27075 16.2009 2.34355 16.2279 2.4184C15.7111 2.27861 15.2148 2.11032 14.71 1.97348C14.3155 1.86655 13.9104 1.79865 13.5062 1.69685C13.4508 1.61521 13.4087 1.53836 13.3459 1.48697C12.9564 1.16837 12.5564 0.862226 12.1718 0.537888C11.9787 0.375023 11.8105 0.182519 11.6311 0.00341797C12.2596 0.018112 12.8881 0.032806 13.5385 0.0509593Z"
          fill="#FF4900"
        />
        <path
          d="M22.745 12.384C23.0323 12.5764 23.3213 12.7663 23.6062 12.9621C23.8382 13.1216 24.0653 13.2882 24.3134 13.453C24.2925 14.1873 24.1365 14.8986 23.9037 15.6146C23.7328 15.5315 23.5858 15.4375 23.4441 15.3361C23.1133 15.0995 22.7851 14.8592 22.4522 14.5999C22.5329 13.9086 22.6167 13.2378 22.7024 12.5672C22.7103 12.5054 22.7305 12.4451 22.745 12.384Z"
          fill="#FF4900"
        />
        <path
          d="M16.5564 0.764404C17.4671 1.12265 18.3515 1.54258 19.1306 2.13449C19.813 2.65291 20.4803 3.20362 21.083 3.8108C21.5879 4.31944 21.9898 4.93024 22.4208 5.51201C22.3024 5.47158 22.1907 5.42739 22.1003 5.35614C21.7231 5.05878 21.3536 4.75175 20.979 4.45105C19.6318 3.36966 18.2816 2.29204 16.9391 1.20499C16.7902 1.08444 16.683 0.912507 16.5564 0.764404Z"
          fill="#FF4900"
        />
        <path
          d="M22.4559 14.6204C22.7851 14.8591 23.1133 15.0994 23.4441 15.336C23.5858 15.4374 23.7329 15.5314 23.8946 15.6324C23.656 16.3079 23.4004 16.9799 23.1109 17.6571C22.6395 17.3109 22.202 16.9595 21.7736 16.5926C22.0071 15.9249 22.2315 15.2726 22.4559 14.6204Z"
          fill="#FF4900"
        />
        <path
          d="M9.85343 1.91637C9.74309 1.78895 9.64623 1.64581 9.51967 1.5373C9.22753 1.28678 8.91914 1.05529 8.6219 0.810545C8.56631 0.764773 8.53195 0.693218 8.48425 0.616006C9.05611 0.448202 9.6313 0.29718 10.2071 0.148534C10.2938 0.126139 10.3835 0.114829 10.4966 0.11829C10.8566 0.428528 11.1936 0.716889 11.5264 1.0099C11.7504 1.20712 11.9687 1.41091 12.1677 1.61521C11.9657 1.63605 11.7853 1.65143 11.6053 1.67128C11.3272 1.70196 11.0486 1.73046 10.7716 1.76953C10.4648 1.81282 10.1594 1.86696 9.85343 1.91637Z"
          fill="#FF4900"
        />
        <path
          d="M14.597 24.1622C14.3797 23.9792 14.1894 23.7926 13.9852 23.6227C13.7068 23.391 13.4146 23.1758 13.1356 22.9448C13.0758 22.8953 13.0472 22.8083 13.0249 22.7169C13.7421 22.5621 14.4387 22.429 15.139 22.3125C15.4292 22.587 15.719 22.8414 16.0009 23.1042C16.1762 23.2676 16.3395 23.4437 16.5082 23.6141C15.8781 23.7981 15.248 23.982 14.597 24.1622Z"
          fill="#FF4900"
        />
        <path
          d="M1.61858 17.21C1.34279 17.0075 1.06669 16.8054 0.791312 16.6023C0.542046 16.4184 0.293574 16.2335 0.0276934 16.0456C0.00819589 15.3299 0.00575679 14.6177 0.0247594 13.8831C0.208022 13.9771 0.371423 14.0916 0.531345 14.2107C0.894689 14.4814 1.25632 14.7544 1.62227 15.05C1.62346 15.7857 1.62102 16.4978 1.61858 17.21Z"
          fill="#FF4900"
        />
        <path
          d="M16.5371 0.76064C16.6829 0.912354 16.7902 1.08429 16.9391 1.20483C18.2816 2.29189 19.6318 3.36951 20.979 4.4509C21.3535 4.75159 21.7231 5.05862 22.1003 5.35598C22.1907 5.42723 22.3024 5.47143 22.4223 5.52922C22.6246 5.84014 22.8089 6.1499 22.9954 6.47739C22.7826 6.35289 22.5554 6.22609 22.3548 6.06592C21.0626 5.03404 19.7747 3.99679 18.4884 2.95747C17.5238 2.17799 16.5633 1.3933 15.6033 0.60811C15.566 0.577622 15.5527 0.517841 15.5381 0.460205C15.8712 0.551476 16.1945 0.654253 16.5371 0.76064Z"
          fill="#FF4900"
        />
        <path
          d="M1.61864 15.0264C1.25631 14.7544 0.894681 14.4814 0.531337 14.2107C0.371416 14.0916 0.208015 13.9771 0.028374 13.8595C0.0081404 13.1971 0.00572623 12.5357 0.025116 11.8518C0.322322 12.0258 0.597351 12.2227 0.873239 12.4185C1.12122 12.5945 1.37015 12.7692 1.62227 12.9679C1.62347 13.6698 1.62106 14.3481 1.61864 15.0264Z"
          fill="#FF4900"
        />
        <path
          d="M21.7645 16.6082C22.202 16.9595 22.6395 17.3109 23.0949 17.6656C23.1109 17.6774 23.1088 17.6858 23.0945 17.7145C23.0718 17.7464 23.064 17.7595 23.0587 17.7741C22.7913 18.2334 22.5246 18.6931 22.2558 19.1515C22.2189 19.2145 22.1719 19.2715 22.097 19.3308C21.9716 19.2754 21.8723 19.229 21.7873 19.1638C21.4349 18.8934 21.0868 18.6172 20.7466 18.3319C21.0922 17.7498 21.4283 17.179 21.7645 16.6082Z"
          fill="#FF4900"
        />
        <path
          d="M20.9771 20.6686C20.5656 21.0523 20.1541 21.436 19.708 21.825C19.571 21.776 19.4589 21.7344 19.3678 21.665C19.0009 21.3857 18.6405 21.0977 18.2848 20.7969C18.761 20.3854 19.2302 19.9899 19.7144 19.603C19.7896 19.6577 19.852 19.7011 19.9094 19.7503C20.2659 20.0557 20.6214 20.3624 20.9771 20.6686Z"
          fill="#FF4900"
        />
        <path
          d="M1.2498 6.85693C1.63296 7.13799 1.99894 7.42902 2.36797 7.71615C2.4393 7.77164 2.52255 7.81183 2.61541 7.88079C2.58392 7.99839 2.52866 8.09109 2.49224 8.19068C2.32148 8.65765 2.1559 9.12653 1.96973 9.59345C1.71418 9.42131 1.47974 9.24704 1.23988 9.08058C1.01518 8.92463 0.784737 8.77696 0.556824 8.62565C0.694358 8.23283 0.826124 7.83786 0.971826 7.44809C1.04622 7.24909 1.1456 7.05943 1.2498 6.85693Z"
          fill="#FF4900"
        />
        <path
          d="M18.2777 20.813C18.6405 21.0978 19.0009 21.3857 19.3679 21.6651C19.4589 21.7344 19.571 21.776 19.6923 21.8317C19.1796 22.1846 18.648 22.5361 18.0959 22.8776C18.0544 22.8315 18.0417 22.7852 18.0113 22.761C17.5767 22.4146 17.1398 22.0712 16.7118 21.7108C16.7439 21.6866 16.7698 21.6823 16.7911 21.6701C17.2869 21.3849 17.7823 21.0989 18.2777 20.813Z"
          fill="#FF4900"
        />
        <path
          d="M1.61867 12.9445C1.37016 12.7693 1.12124 12.5946 0.873257 12.4187C0.597369 12.2229 0.32234 12.0259 0.0287476 11.8284C0.0571568 11.3423 0.104244 10.8573 0.149889 10.3722C0.157753 10.2886 0.159487 10.2045 0.200492 10.1108C0.473351 10.2717 0.709515 10.4426 0.946258 10.6128C1.20395 10.798 1.46218 10.9824 1.72375 11.1888C1.71083 11.3064 1.68424 11.402 1.67954 11.4986C1.65609 11.9804 1.6384 12.4625 1.61867 12.9445Z"
          fill="#FF4900"
        />
        <path
          d="M16.7034 21.7273C17.1398 22.0714 17.5767 22.4148 18.0113 22.7612C18.0417 22.7854 18.0544 22.8317 18.0794 22.8851C17.5714 23.1381 17.0594 23.3737 16.5278 23.6118C16.3395 23.4439 16.1762 23.2678 16.0009 23.1044C15.719 22.8416 15.4292 22.5872 15.1588 22.3088C15.6843 22.1013 16.1939 21.9143 16.7034 21.7273Z"
          fill="#FF4900"
        />
        <path
          d="M20.9928 20.6618C20.6214 20.3624 20.2659 20.0558 19.9094 19.7504C19.852 19.7012 19.7896 19.6578 19.7214 19.5873C20.035 19.1851 20.3567 18.8073 20.697 18.4175C20.7237 18.3932 20.7316 18.3808 20.7334 18.3626C20.7272 18.3568 20.7371 18.343 20.7371 18.343C21.0868 18.6171 21.4349 18.8933 21.7873 19.1638C21.8723 19.2289 21.9716 19.2753 22.0808 19.3378C21.7344 19.7818 21.3715 20.2184 20.9928 20.6618Z"
          fill="#FF4900"
        />
        <path
          d="M21.034 6.44434C21.218 6.55539 21.4168 6.64801 21.5836 6.78075C22.2467 7.30849 22.8985 7.85031 23.5586 8.38193C23.6245 8.43505 23.7177 8.45434 23.8099 8.47943C23.9386 8.89809 24.0556 9.32666 24.152 9.77204C24.0594 9.7475 23.9807 9.71452 23.9164 9.66346C23.4841 9.32021 23.0592 8.96745 22.6226 8.62971C22.408 8.46363 22.1735 8.32306 21.9399 8.15445C21.8219 7.90846 21.7205 7.67446 21.6004 7.45053C21.4184 7.11145 21.2234 6.77938 21.034 6.44434Z"
          fill="#FF4900"
        />
        <path
          d="M1.72018 11.1672C1.46219 10.9824 1.20396 10.798 0.946266 10.6128C0.709523 10.4427 0.473359 10.2717 0.218201 10.0998C0.289198 9.68515 0.378562 9.27172 0.469027 8.85853C0.484635 8.78724 0.504915 8.71698 0.539945 8.63599C0.784767 8.77705 1.01521 8.92472 1.23991 9.08066C1.47977 9.24713 1.71421 9.4214 1.9671 9.61465C1.89552 10.1471 1.80785 10.6571 1.72018 11.1672Z"
          fill="#FF4900"
        />
        <path
          d="M21.9481 8.1709C22.1735 8.32301 22.408 8.46357 22.6226 8.62966C23.0592 8.9674 23.4841 9.32016 23.9164 9.66341C23.9807 9.71447 24.0594 9.74745 24.1485 9.79237C24.2357 10.2384 24.3058 10.681 24.3723 11.1453C24.0444 10.9329 23.7193 10.6998 23.396 10.4641C23.0936 10.2436 22.7931 10.0203 22.4696 9.77722C22.2809 9.22783 22.1145 8.69936 21.9481 8.1709Z"
          fill="#FF4900"
        />
        <path
          d="M12.1895 1.61172C11.9687 1.41087 11.7505 1.20708 11.5264 1.00986C11.1936 0.716847 10.8567 0.428486 10.5176 0.121608C10.8708 0.0689048 11.2279 0.0327394 11.6081 0C11.8105 0.182526 11.9787 0.375031 12.1718 0.537896C12.5564 0.862234 12.9564 1.16838 13.3459 1.48698C13.4087 1.53837 13.4508 1.61522 13.484 1.70028C13.0402 1.68408 12.6149 1.6479 12.1895 1.61172Z"
          fill="#FF4900"
        />
        <path
          d="M23.0712 17.7695C23.064 17.7596 23.0718 17.7465 23.0904 17.7268C23.0936 17.7341 23.0886 17.7495 23.0712 17.7695Z"
          fill="#FF4900"
        />
        <path
          d="M9.86188 22.4574C9.8694 22.4539 9.88503 22.4586 9.9051 22.4761C9.8949 22.4836 9.88172 22.4758 9.86188 22.4574Z"
          fill="#FF4900"
        />
        <path
          d="M20.697 18.4177C20.6909 18.4076 20.7034 18.3857 20.7277 18.3662C20.7316 18.381 20.7237 18.3934 20.697 18.4177Z"
          fill="#FF4900"
        />
        <path
          d="M14.7793 14.1547C13.745 14.3194 12.8586 13.9878 12.0904 13.3177C11.8421 13.1011 11.6487 12.8213 11.4324 12.5685C11.0543 12.1266 10.5868 11.8591 9.97258 11.8059C9.76701 11.6152 9.58951 11.4414 9.40523 11.2751C9.11629 11.0144 8.82277 10.7588 8.53119 10.501C8.85319 10.4014 9.17238 10.2909 9.49837 10.2068C9.66343 10.1642 9.84075 10.1691 10.0384 10.1726C10.1651 10.3043 10.2557 10.4276 10.3686 10.525C10.6041 10.728 10.8514 10.9173 11.0937 11.1124C12.1941 11.9984 13.2958 12.8829 14.3932 13.7726C14.5332 13.8861 14.6511 14.0267 14.7793 14.1547Z"
          fill="#FF4900"
        />
        <path
          d="M14.8006 14.1584C14.6512 14.0267 14.5332 13.8861 14.3932 13.7727C13.2958 12.883 12.1941 11.9985 11.0937 11.1124C10.8514 10.9173 10.6041 10.7281 10.3686 10.525C10.2557 10.4276 10.1651 10.3043 10.0605 10.1763C11.1399 10.2166 12.0447 10.6485 12.7295 11.4895C12.9883 11.8074 13.2177 12.1464 13.5965 12.3284C14.0768 12.5592 14.5706 12.5968 15.0685 12.3723C15.1274 12.3457 15.1879 12.3226 15.2796 12.2984C15.7443 12.6513 16.1772 13.0037 16.61 13.3561C16.316 13.5524 16.0397 13.7869 15.7228 13.9334C15.4463 14.0611 15.1239 14.0897 14.8006 14.1584Z"
          fill="#FF4900"
        />
        <path
          d="M16.6281 13.3536C16.1771 13.0037 15.7443 12.6513 15.2964 12.2903C15.7785 11.893 16.2757 11.5043 16.7944 11.1306C16.9087 11.2387 16.9933 11.3421 17.0956 11.4231C17.4221 11.6814 17.7552 11.9315 18.0858 12.1848C17.7632 12.4545 17.4424 12.7265 17.1171 12.9929C16.9647 13.1178 16.8034 13.232 16.6281 13.3536Z"
          fill="#FF4900"
        />
        <path
          d="M8.51875 10.5042C8.82279 10.7588 9.11631 11.0144 9.40524 11.2751C9.58953 11.4414 9.76703 11.6152 9.95136 11.8022C9.54688 11.8912 9.15718 12.01 8.79247 12.2722C8.58813 12.1546 8.41672 12.0372 8.24503 11.9202C7.94991 11.7191 7.65462 11.5182 7.35941 11.3173C7.70277 11.0643 8.04614 10.8113 8.41815 10.552C8.46011 10.5375 8.47184 10.5276 8.48197 10.5157C8.49008 10.5129 8.49818 10.5101 8.51875 10.5042Z"
          fill="#FF4900"
        />
        <path
          d="M7.34344 11.3242C7.65461 11.5182 7.9499 11.7191 8.24502 11.9202C8.4167 12.0372 8.58812 12.1546 8.77619 12.2792C8.44784 12.5699 8.10296 12.8531 7.7272 13.1345C7.26245 12.7813 6.82858 12.4301 6.39471 12.0788C6.70564 11.8296 7.01656 11.5804 7.34344 11.3242Z"
          fill="#FF4900"
        />
        <path
          d="M6.37897 12.0857C6.8286 12.4301 7.26247 12.7814 7.71137 13.1414C7.5232 13.3182 7.33015 13.5008 7.11469 13.6514C6.66817 13.9635 6.08545 13.7992 5.90164 13.4345C5.66354 12.9621 5.75978 12.521 6.24557 12.1826C6.28605 12.1544 6.32406 12.1227 6.37897 12.0857Z"
          fill="#FF4900"
        />
        <path
          d="M18.1035 12.1839C17.7552 11.9315 17.4221 11.6815 17.0956 11.4231C16.9933 11.3421 16.9087 11.2387 16.8123 11.1281C17.11 10.8145 17.4005 10.5113 17.8853 10.5538C18.2022 10.5816 18.4124 10.7459 18.5505 11.0064C18.7017 11.2919 18.6794 11.5868 18.4844 11.8449C18.3862 11.9749 18.2437 12.0714 18.1035 12.1839Z"
          fill="#FF4900"
        />
        <path
          d="M8.46864 10.5142C8.47181 10.5275 8.46009 10.5374 8.43637 10.5506C8.43575 10.5414 8.44554 10.527 8.46864 10.5142Z"
          fill="#FF4900"
        />
      </svg>
    </>
  );
};
export default Header;
