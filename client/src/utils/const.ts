import { PageName } from "../@types";

export const PAGE_NAME: PageName = {
  HOME: "Home",
  DASHBOARD: "Dashboard",
  ANALYTICS: "Analytics",
  REPORTS: "Reports",
};
export const PAGE_PATH: PageName = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  ANALYTICS: "/analytics",
  REPORTS: "/reports",
};

export const OPEN_CLOSE_STATS_CLOUMN = {
  AREA_CODE: "trdar_cd",
  AREA_CODE_NAME: "trdar_cd_nm",
  AREA_TYPE_CODE: "trdar_se_cd",
  AREA_TYPE_CODE_NAME: "trdar_se_cd_nm",
  SERVICE_TYPE_CODE: "svc_induty_cd",
  SERVICE_TYPE_CODE_NAME: "svc_induty_cd_nm",
  STORE_CNT: "stor_co",
  OPEN_STORE_CNT: "opbiz_stor_co",
  CLOSED_STORE_CNT: "clsbiz_stor_co",
  FRC_STORE_CNT: "frc_stor_co",
  SIMILR_STORE_CNT: "similr_induty_stor_co",
  OPEN_STORE_RATE: "opbiz_rt",
  CLOSED_STORE_RATE: "clsbiz_rt",
  YEAR_CODE: "stdr_yyqu_cd",
};

export const OPEN_CLOSE_STATS_CLOUMN_NAME = {
  AREA_CODE: "상권 코드",
  AREA_CODE_NAME: "상권 코드 명",
  AREA_TYPE_CODE: "상권 구분 코드",
  AREA_TYPE_CODE_NAME: "상권 구분 코드 명",
  SERVICE_TYPE_CODE: "서비스 업종 코드",
  SERVICE_TYPE_CODE_NAME: "서비스 업종 코드 명",
  STORE_CNT: "점포 수",
  OPEN_STORE_CNT: "개업 점포 수",
  CLOSED_STORE_CNT: "폐업 점포 수",
  FRC_STORE_CNT: "프랜차이즈 점포 수",
  SIMILR_STORE_CNT: "유사 업종 점포 수",
  OPEN_STORE_RATE: "개업 율",
  CLOSED_STORE_RATE: "폐업 율",
  YEAR_CODE: "기준 년분기 코드",
};
