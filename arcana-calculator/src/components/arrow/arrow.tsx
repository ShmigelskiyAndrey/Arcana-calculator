function Arrow({ color }: any) {
  return (
      (color === "gradient") ? 
      <svg width="55" height="8" viewBox="0 0 55 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M54.4076 4.35355C54.6029 4.15829 54.6029 3.84171 54.4076 3.64645L51.2256 0.464466C51.0304 0.269204 50.7138 0.269204 50.5185 0.464466C50.3233 0.659728 50.3233 0.976311 50.5185 1.17157L53.347 4L50.5185 6.82843C50.3233 7.02369 50.3233 7.34027 50.5185 7.53553C50.7138 7.7308 51.0304 7.7308 51.2256 7.53553L54.4076 4.35355ZM0 4.5H54.0541V3.5H0V4.5Z" fill="url(#paint0_linear_1_796)"/>
        <defs>
          <linearGradient id="paint0_linear_1_796" x1="1.12156" y1="5.15734" x2="2.30236" y2="-3.25992" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9B077"/>
            <stop offset="0.48" stopColor="#F1E1B5"/>
            <stop offset="1" stopColor="#D9B077"/>
          </linearGradient>
        </defs>
      </svg> : 
      <svg width="41" height="10" viewBox="0 0 41 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40.4243 5.42426C40.6586 5.18995 40.6586 4.81005 40.4243 4.57574L36.6059 0.757359C36.3716 0.523045 35.9917 0.523045 35.7574 0.757359C35.523 0.991674 35.523 1.37157 35.7574 1.60589L39.1515 5L35.7574 8.39411C35.523 8.62843 35.523 9.00833 35.7574 9.24264C35.9917 9.47696 36.3716 9.47696 36.6059 9.24264L40.4243 5.42426ZM0 5.6H40V4.4H0V5.6Z" fill={color}/>
      </svg>
  )
}

export { Arrow }