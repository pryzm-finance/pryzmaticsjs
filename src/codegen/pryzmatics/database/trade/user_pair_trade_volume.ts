export enum UserPairTradeVolumeOrderByProperty {
  USER_PAIR_TRADE_VOLUME_ORDER_BY_VOLUME = 0,
  UNRECOGNIZED = -1,
}
export const UserPairTradeVolumeOrderByPropertySDKType = UserPairTradeVolumeOrderByProperty;
export const UserPairTradeVolumeOrderByPropertyAmino = UserPairTradeVolumeOrderByProperty;
export function userPairTradeVolumeOrderByPropertyFromJSON(object: any): UserPairTradeVolumeOrderByProperty {
  switch (object) {
    case 0:
    case "USER_PAIR_TRADE_VOLUME_ORDER_BY_VOLUME":
      return UserPairTradeVolumeOrderByProperty.USER_PAIR_TRADE_VOLUME_ORDER_BY_VOLUME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserPairTradeVolumeOrderByProperty.UNRECOGNIZED;
  }
}
export function userPairTradeVolumeOrderByPropertyToJSON(object: UserPairTradeVolumeOrderByProperty): string {
  switch (object) {
    case UserPairTradeVolumeOrderByProperty.USER_PAIR_TRADE_VOLUME_ORDER_BY_VOLUME:
      return "USER_PAIR_TRADE_VOLUME_ORDER_BY_VOLUME";
    case UserPairTradeVolumeOrderByProperty.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}