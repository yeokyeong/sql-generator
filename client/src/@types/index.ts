export interface LayoutDefaultProps {
    children? : React.ReactElement;
  }

  //api response type
  export interface ApiBusinessOpenCloseStats {
    id: number
    trdar_cd: string
    trdar_cd_nm: string
    trdar_se_cd: string
    trdar_se_cd_nm: string
    svc_induty_cd: string
    svc_induty_cd_nm: string
    stor_co: number
    opbiz_stor_co: number
    clsbiz_stor_co: number
    frc_stor_co: number
    similr_induty_stor_co: number
    opbiz_rt: number
    clsbiz_rt: number
    stdr_yyqu_cd: string
  }
  
  // ApiBusinessOpenCloseStats type at client
  export interface ClientBusinessStats {
    id: number;
    areaCode: string;
    areaName: string;
    areaTypeCode: string;
    areaTypeName: string;
    industryCode: string;
    industryName: string;
    totalStores: number;
    openStores: number;
    closedStores: number;
    franchiseStores: number;
    similarIndustryStores: number;
    openRate: number;
    closeRate: number;
    quarterCode: string;
  }