import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Token, TokenAmino, TokenSDKType } from "../pool/token";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface Maturity {
  id: bigint;
  assetId: string;
  symbol: string;
  active: boolean;
  introductionTime: Timestamp;
  expirationTime: Timestamp;
  blockHeight: bigint;
  blockTime: Timestamp;
  /** use y_roi instead */
  /** @deprecated */
  roi?: string;
  /** @deprecated */
  yApy?: string;
  /** @deprecated */
  pApy?: string;
  /** @deprecated */
  yPrice?: string;
  /** @deprecated */
  pPrice?: string;
  /** @deprecated */
  error: string;
  /** @deprecated */
  yRoi?: string;
  /** @deprecated */
  pRoi?: string;
  yToken?: Token;
  pToken?: Token;
}
export interface MaturityProtoMsg {
  typeUrl: "/pryzmatics.maturity.Maturity";
  value: Uint8Array;
}
export interface MaturityAmino {
  id?: string;
  asset_id?: string;
  symbol?: string;
  active?: boolean;
  introduction_time?: string;
  expiration_time?: string;
  block_height?: string;
  block_time?: string;
  /** use y_roi instead */
  /** @deprecated */
  roi?: string;
  /** @deprecated */
  y_apy?: string;
  /** @deprecated */
  p_apy?: string;
  /** @deprecated */
  y_price?: string;
  /** @deprecated */
  p_price?: string;
  /** @deprecated */
  error?: string;
  /** @deprecated */
  y_roi?: string;
  /** @deprecated */
  p_roi?: string;
  y_token?: TokenAmino;
  p_token?: TokenAmino;
}
export interface MaturityAminoMsg {
  type: "/pryzmatics.maturity.Maturity";
  value: MaturityAmino;
}
export interface MaturitySDKType {
  id: bigint;
  asset_id: string;
  symbol: string;
  active: boolean;
  introduction_time: TimestampSDKType;
  expiration_time: TimestampSDKType;
  block_height: bigint;
  block_time: TimestampSDKType;
  /** @deprecated */
  roi?: string;
  /** @deprecated */
  y_apy?: string;
  /** @deprecated */
  p_apy?: string;
  /** @deprecated */
  y_price?: string;
  /** @deprecated */
  p_price?: string;
  /** @deprecated */
  error: string;
  /** @deprecated */
  y_roi?: string;
  /** @deprecated */
  p_roi?: string;
  y_token?: TokenSDKType;
  p_token?: TokenSDKType;
}
function createBaseMaturity(): Maturity {
  return {
    id: BigInt(0),
    assetId: "",
    symbol: "",
    active: false,
    introductionTime: Timestamp.fromPartial({}),
    expirationTime: Timestamp.fromPartial({}),
    blockHeight: BigInt(0),
    blockTime: Timestamp.fromPartial({}),
    roi: undefined,
    yApy: undefined,
    pApy: undefined,
    yPrice: undefined,
    pPrice: undefined,
    error: "",
    yRoi: undefined,
    pRoi: undefined,
    yToken: undefined,
    pToken: undefined
  };
}
export const Maturity = {
  typeUrl: "/pryzmatics.maturity.Maturity",
  is(o: any): o is Maturity {
    return o && (o.$typeUrl === Maturity.typeUrl || typeof o.id === "bigint" && typeof o.assetId === "string" && typeof o.symbol === "string" && typeof o.active === "boolean" && Timestamp.is(o.introductionTime) && Timestamp.is(o.expirationTime) && typeof o.blockHeight === "bigint" && Timestamp.is(o.blockTime) && typeof o.error === "string");
  },
  isSDK(o: any): o is MaturitySDKType {
    return o && (o.$typeUrl === Maturity.typeUrl || typeof o.id === "bigint" && typeof o.asset_id === "string" && typeof o.symbol === "string" && typeof o.active === "boolean" && Timestamp.isSDK(o.introduction_time) && Timestamp.isSDK(o.expiration_time) && typeof o.block_height === "bigint" && Timestamp.isSDK(o.block_time) && typeof o.error === "string");
  },
  isAmino(o: any): o is MaturityAmino {
    return o && (o.$typeUrl === Maturity.typeUrl || typeof o.id === "bigint" && typeof o.asset_id === "string" && typeof o.symbol === "string" && typeof o.active === "boolean" && Timestamp.isAmino(o.introduction_time) && Timestamp.isAmino(o.expiration_time) && typeof o.block_height === "bigint" && Timestamp.isAmino(o.block_time) && typeof o.error === "string");
  },
  encode(message: Maturity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).int64(message.id);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.active === true) {
      writer.uint32(32).bool(message.active);
    }
    if (message.introductionTime !== undefined) {
      Timestamp.encode(message.introductionTime, writer.uint32(42).fork()).ldelim();
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(50).fork()).ldelim();
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(56).int64(message.blockHeight);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(66).fork()).ldelim();
    }
    if (message.roi !== undefined) {
      writer.uint32(74).string(Decimal.fromUserInput(message.roi, 18).atomics);
    }
    if (message.yApy !== undefined) {
      writer.uint32(82).string(Decimal.fromUserInput(message.yApy, 18).atomics);
    }
    if (message.pApy !== undefined) {
      writer.uint32(90).string(Decimal.fromUserInput(message.pApy, 18).atomics);
    }
    if (message.yPrice !== undefined) {
      writer.uint32(98).string(Decimal.fromUserInput(message.yPrice, 18).atomics);
    }
    if (message.pPrice !== undefined) {
      writer.uint32(106).string(Decimal.fromUserInput(message.pPrice, 18).atomics);
    }
    if (message.error !== "") {
      writer.uint32(114).string(message.error);
    }
    if (message.yRoi !== undefined) {
      writer.uint32(122).string(Decimal.fromUserInput(message.yRoi, 18).atomics);
    }
    if (message.pRoi !== undefined) {
      writer.uint32(130).string(Decimal.fromUserInput(message.pRoi, 18).atomics);
    }
    if (message.yToken !== undefined) {
      Token.encode(message.yToken, writer.uint32(138).fork()).ldelim();
    }
    if (message.pToken !== undefined) {
      Token.encode(message.pToken, writer.uint32(146).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Maturity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaturity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int64();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.active = reader.bool();
          break;
        case 5:
          message.introductionTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.expirationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.blockHeight = reader.int64();
          break;
        case 8:
          message.blockTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
          message.roi = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.yApy = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.pApy = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.yPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 13:
          message.pPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 14:
          message.error = reader.string();
          break;
        case 15:
          message.yRoi = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 16:
          message.pRoi = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 17:
          message.yToken = Token.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 18:
          message.pToken = Token.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Maturity {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      active: isSet(object.active) ? Boolean(object.active) : false,
      introductionTime: isSet(object.introductionTime) ? fromJsonTimestamp(object.introductionTime) : undefined,
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
      roi: isSet(object.roi) ? String(object.roi) : undefined,
      yApy: isSet(object.yApy) ? String(object.yApy) : undefined,
      pApy: isSet(object.pApy) ? String(object.pApy) : undefined,
      yPrice: isSet(object.yPrice) ? String(object.yPrice) : undefined,
      pPrice: isSet(object.pPrice) ? String(object.pPrice) : undefined,
      error: isSet(object.error) ? String(object.error) : "",
      yRoi: isSet(object.yRoi) ? String(object.yRoi) : undefined,
      pRoi: isSet(object.pRoi) ? String(object.pRoi) : undefined,
      yToken: isSet(object.yToken) ? Token.fromJSON(object.yToken) : undefined,
      pToken: isSet(object.pToken) ? Token.fromJSON(object.pToken) : undefined
    };
  },
  toJSON(message: Maturity): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.active !== undefined && (obj.active = message.active);
    message.introductionTime !== undefined && (obj.introductionTime = fromTimestamp(message.introductionTime).toISOString());
    message.expirationTime !== undefined && (obj.expirationTime = fromTimestamp(message.expirationTime).toISOString());
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    message.blockTime !== undefined && (obj.blockTime = fromTimestamp(message.blockTime).toISOString());
    message.roi !== undefined && (obj.roi = message.roi);
    message.yApy !== undefined && (obj.yApy = message.yApy);
    message.pApy !== undefined && (obj.pApy = message.pApy);
    message.yPrice !== undefined && (obj.yPrice = message.yPrice);
    message.pPrice !== undefined && (obj.pPrice = message.pPrice);
    message.error !== undefined && (obj.error = message.error);
    message.yRoi !== undefined && (obj.yRoi = message.yRoi);
    message.pRoi !== undefined && (obj.pRoi = message.pRoi);
    message.yToken !== undefined && (obj.yToken = message.yToken ? Token.toJSON(message.yToken) : undefined);
    message.pToken !== undefined && (obj.pToken = message.pToken ? Token.toJSON(message.pToken) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Maturity>): Maturity {
    const message = createBaseMaturity();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.assetId = object.assetId ?? "";
    message.symbol = object.symbol ?? "";
    message.active = object.active ?? false;
    message.introductionTime = object.introductionTime !== undefined && object.introductionTime !== null ? Timestamp.fromPartial(object.introductionTime) : undefined;
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? Timestamp.fromPartial(object.expirationTime) : undefined;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    message.roi = object.roi ?? undefined;
    message.yApy = object.yApy ?? undefined;
    message.pApy = object.pApy ?? undefined;
    message.yPrice = object.yPrice ?? undefined;
    message.pPrice = object.pPrice ?? undefined;
    message.error = object.error ?? "";
    message.yRoi = object.yRoi ?? undefined;
    message.pRoi = object.pRoi ?? undefined;
    message.yToken = object.yToken !== undefined && object.yToken !== null ? Token.fromPartial(object.yToken) : undefined;
    message.pToken = object.pToken !== undefined && object.pToken !== null ? Token.fromPartial(object.pToken) : undefined;
    return message;
  },
  fromAmino(object: MaturityAmino): Maturity {
    const message = createBaseMaturity();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    if (object.introduction_time !== undefined && object.introduction_time !== null) {
      message.introductionTime = Timestamp.fromAmino(object.introduction_time);
    }
    if (object.expiration_time !== undefined && object.expiration_time !== null) {
      message.expirationTime = Timestamp.fromAmino(object.expiration_time);
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = Timestamp.fromAmino(object.block_time);
    }
    if (object.roi !== undefined && object.roi !== null) {
      message.roi = object.roi;
    }
    if (object.y_apy !== undefined && object.y_apy !== null) {
      message.yApy = object.y_apy;
    }
    if (object.p_apy !== undefined && object.p_apy !== null) {
      message.pApy = object.p_apy;
    }
    if (object.y_price !== undefined && object.y_price !== null) {
      message.yPrice = object.y_price;
    }
    if (object.p_price !== undefined && object.p_price !== null) {
      message.pPrice = object.p_price;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    if (object.y_roi !== undefined && object.y_roi !== null) {
      message.yRoi = object.y_roi;
    }
    if (object.p_roi !== undefined && object.p_roi !== null) {
      message.pRoi = object.p_roi;
    }
    if (object.y_token !== undefined && object.y_token !== null) {
      message.yToken = Token.fromAmino(object.y_token);
    }
    if (object.p_token !== undefined && object.p_token !== null) {
      message.pToken = Token.fromAmino(object.p_token);
    }
    return message;
  },
  toAmino(message: Maturity, useInterfaces: boolean = true): MaturityAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.active = message.active === false ? undefined : message.active;
    obj.introduction_time = message.introductionTime ? Timestamp.toAmino(message.introductionTime, useInterfaces) : undefined;
    obj.expiration_time = message.expirationTime ? Timestamp.toAmino(message.expirationTime, useInterfaces) : undefined;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.block_time = message.blockTime ? Timestamp.toAmino(message.blockTime, useInterfaces) : undefined;
    obj.roi = padDecimal(message.roi) === null ? undefined : padDecimal(message.roi);
    obj.y_apy = padDecimal(message.yApy) === null ? undefined : padDecimal(message.yApy);
    obj.p_apy = padDecimal(message.pApy) === null ? undefined : padDecimal(message.pApy);
    obj.y_price = padDecimal(message.yPrice) === null ? undefined : padDecimal(message.yPrice);
    obj.p_price = padDecimal(message.pPrice) === null ? undefined : padDecimal(message.pPrice);
    obj.error = message.error === "" ? undefined : message.error;
    obj.y_roi = padDecimal(message.yRoi) === null ? undefined : padDecimal(message.yRoi);
    obj.p_roi = padDecimal(message.pRoi) === null ? undefined : padDecimal(message.pRoi);
    obj.y_token = message.yToken ? Token.toAmino(message.yToken, useInterfaces) : undefined;
    obj.p_token = message.pToken ? Token.toAmino(message.pToken, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: MaturityAminoMsg): Maturity {
    return Maturity.fromAmino(object.value);
  },
  fromProtoMsg(message: MaturityProtoMsg, useInterfaces: boolean = true): Maturity {
    return Maturity.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Maturity): Uint8Array {
    return Maturity.encode(message).finish();
  },
  toProtoMsg(message: Maturity): MaturityProtoMsg {
    return {
      typeUrl: "/pryzmatics.maturity.Maturity",
      value: Maturity.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Maturity.typeUrl, Maturity);