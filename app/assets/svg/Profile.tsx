import React from 'react';

export const Profile = (props) => {
  const { color } = props;

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 0C8.06053 0.00368503 6.16393 0.571311 4.54128 1.63374C2.91862 2.69617 1.63994 4.20754 0.86099 5.98377C0.0820354 7.76 -0.163575 9.72442 0.154075 11.6378C0.471725 13.5511 1.33893 15.3308 2.65005 16.76C3.58647 17.775 4.72299 18.5851 5.98799 19.1392C7.25298 19.6933 8.61903 19.9793 10 19.9793C11.3811 19.9793 12.7471 19.6933 14.0121 19.1392C15.2771 18.5851 16.4136 17.775 17.35 16.76C18.6612 15.3308 19.5284 13.5511 19.846 11.6378C20.1637 9.72442 19.9181 7.76 19.1391 5.98377C18.3602 4.20754 17.0815 2.69617 15.4588 1.63374C13.8362 0.571311 11.9396 0.00368503 10 0ZM10 18C7.92851 17.9969 5.93896 17.1903 4.45005 15.75C4.90209 14.6495 5.67108 13.7083 6.6593 13.0459C7.64752 12.3835 8.81036 12.0298 10 12.0298C11.1897 12.0298 12.3526 12.3835 13.3408 13.0459C14.329 13.7083 15.098 14.6495 15.55 15.75C14.0611 17.1903 12.0716 17.9969 10 18ZM8.00005 8C8.00005 7.60444 8.11735 7.21776 8.33711 6.88886C8.55687 6.55996 8.86923 6.30362 9.23468 6.15224C9.60013 6.00087 10.0023 5.96126 10.3902 6.03843C10.7782 6.1156 11.1346 6.30608 11.4143 6.58579C11.694 6.86549 11.8844 7.22186 11.9616 7.60982C12.0388 7.99778 11.9992 8.39991 11.8478 8.76537C11.6964 9.13082 11.4401 9.44318 11.1112 9.66294C10.7823 9.8827 10.3956 10 10 10C9.46962 10 8.96091 9.78929 8.58584 9.41421C8.21076 9.03914 8.00005 8.53043 8.00005 8ZM16.91 14C16.0166 12.4718 14.6415 11.283 13 10.62C13.5092 10.0427 13.841 9.33066 13.9555 8.56944C14.0701 7.80822 13.9625 7.03011 13.6458 6.3285C13.3291 5.62688 12.8166 5.03156 12.17 4.61397C11.5233 4.19637 10.7698 3.97425 10 3.97425C9.23026 3.97425 8.47682 4.19637 7.83014 4.61397C7.18346 5.03156 6.67102 5.62688 6.3543 6.3285C6.03758 7.03011 5.93004 7.80822 6.04458 8.56944C6.15912 9.33066 6.49088 10.0427 7.00005 10.62C5.35865 11.283 3.98352 12.4718 3.09005 14C2.37799 12.7871 2.00177 11.4065 2.00005 10C2.00005 7.87827 2.8429 5.84344 4.34319 4.34315C5.84349 2.84285 7.87832 2 10 2C12.1218 2 14.1566 2.84285 15.6569 4.34315C17.1572 5.84344 18 7.87827 18 10C17.9983 11.4065 17.6221 12.7871 16.91 14Z"
        fill={color}
      />
    </svg>
  );
};
