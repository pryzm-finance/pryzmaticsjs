import { Token, TokenAmino, TokenSDKType } from "../pool/token";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface Asset {
  id: string;
  cAssetToken: Token;
  underlyingAssetToken?: Token;
  totalRefractedCAsset: string;
  totalPAsset: string;
  poolId?: string;
  exchangeRate?: string;
  exchangeRateBlockHeight?: string;
  cPAssetExchangeRate?: string;
  error: string;
  hostChainId: string;
  lastYieldBlockHeight?: string;
  /** the yield number is in 0-100 range */
  apr?: string;
  /** the yield number is in 0-100 range */
  annualYieldPerYAsset?: string;
  yieldError: string;
  displayName: string;
  decimals: bigint;
}
export interface AssetProtoMsg {
  typeUrl: "/pryzmatics.asset.Asset";
  value: Uint8Array;
}
export interface AssetAmino {
  id?: string;
  c_asset_token?: TokenAmino;
  underlying_asset_token?: TokenAmino;
  total_refracted_c_asset?: string;
  total_p_asset?: string;
  pool_id?: string;
  exchange_rate?: string;
  exchange_rate_block_height?: string;
  c_p_asset_exchange_rate?: string;
  error?: string;
  host_chain_id?: string;
  last_yield_block_height?: string;
  /** the yield number is in 0-100 range */
  apr?: string;
  /** the yield number is in 0-100 range */
  annual_yield_per_y_asset?: string;
  yield_error?: string;
  displayName?: string;
  decimals?: string;
}
export interface AssetAminoMsg {
  type: "/pryzmatics.asset.Asset";
  value: AssetAmino;
}
export interface AssetSDKType {
  id: string;
  c_asset_token: TokenSDKType;
  underlying_asset_token?: TokenSDKType;
  total_refracted_c_asset: string;
  total_p_asset: string;
  pool_id?: string;
  exchange_rate?: string;
  exchange_rate_block_height?: string;
  c_p_asset_exchange_rate?: string;
  error: string;
  host_chain_id: string;
  last_yield_block_height?: string;
  apr?: string;
  annual_yield_per_y_asset?: string;
  yield_error: string;
  displayName: string;
  decimals: bigint;
}
function createBaseAsset(): Asset {
  return {
    id: "",
    cAssetToken: Token.fromPartial({}),
    underlyingAssetToken: undefined,
    totalRefractedCAsset: "",
    totalPAsset: "",
    poolId: undefined,
    exchangeRate: undefined,
    exchangeRateBlockHeight: undefined,
    cPAssetExchangeRate: undefined,
    error: "",
    hostChainId: "",
    lastYieldBlockHeight: undefined,
    apr: undefined,
    annualYieldPerYAsset: undefined,
    yieldError: "",
    displayName: "",
    decimals: BigInt(0)
  };
}
export const Asset = {
  typeUrl: "/pryzmatics.asset.Asset",
  is(o: any): o is Asset {
    return o && (o.$typeUrl === Asset.typeUrl || typeof o.id === "string" && Token.is(o.cAssetToken) && typeof o.totalRefractedCAsset === "string" && typeof o.totalPAsset === "string" && typeof o.error === "string" && typeof o.hostChainId === "string" && typeof o.yieldError === "string" && typeof o.displayName === "string" && typeof o.decimals === "bigint");
  },
  isSDK(o: any): o is AssetSDKType {
    return o && (o.$typeUrl === Asset.typeUrl || typeof o.id === "string" && Token.isSDK(o.c_asset_token) && typeof o.total_refracted_c_asset === "string" && typeof o.total_p_asset === "string" && typeof o.error === "string" && typeof o.host_chain_id === "string" && typeof o.yield_error === "string" && typeof o.displayName === "string" && typeof o.decimals === "bigint");
  },
  isAmino(o: any): o is AssetAmino {
    return o && (o.$typeUrl === Asset.typeUrl || typeof o.id === "string" && Token.isAmino(o.c_asset_token) && typeof o.total_refracted_c_asset === "string" && typeof o.total_p_asset === "string" && typeof o.error === "string" && typeof o.host_chain_id === "string" && typeof o.yield_error === "string" && typeof o.displayName === "string" && typeof o.decimals === "bigint");
  },
  encode(message: Asset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.cAssetToken !== undefined) {
      Token.encode(message.cAssetToken, writer.uint32(18).fork()).ldelim();
    }
    if (message.underlyingAssetToken !== undefined) {
      Token.encode(message.underlyingAssetToken, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalRefractedCAsset !== "") {
      writer.uint32(34).string(message.totalRefractedCAsset);
    }
    if (message.totalPAsset !== "") {
      writer.uint32(42).string(message.totalPAsset);
    }
    if (message.poolId !== undefined) {
      writer.uint32(50).string(message.poolId);
    }
    if (message.exchangeRate !== undefined) {
      writer.uint32(58).string(Decimal.fromUserInput(message.exchangeRate, 18).atomics);
    }
    if (message.exchangeRateBlockHeight !== undefined) {
      writer.uint32(66).string(message.exchangeRateBlockHeight);
    }
    if (message.cPAssetExchangeRate !== undefined) {
      writer.uint32(74).string(Decimal.fromUserInput(message.cPAssetExchangeRate, 18).atomics);
    }
    if (message.error !== "") {
      writer.uint32(82).string(message.error);
    }
    if (message.hostChainId !== "") {
      writer.uint32(90).string(message.hostChainId);
    }
    if (message.lastYieldBlockHeight !== undefined) {
      writer.uint32(98).string(message.lastYieldBlockHeight);
    }
    if (message.apr !== undefined) {
      writer.uint32(106).string(Decimal.fromUserInput(message.apr, 18).atomics);
    }
    if (message.annualYieldPerYAsset !== undefined) {
      writer.uint32(114).string(Decimal.fromUserInput(message.annualYieldPerYAsset, 18).atomics);
    }
    if (message.yieldError !== "") {
      writer.uint32(122).string(message.yieldError);
    }
    if (message.displayName !== "") {
      writer.uint32(130).string(message.displayName);
    }
    if (message.decimals !== BigInt(0)) {
      writer.uint32(136).int64(message.decimals);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Asset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.cAssetToken = Token.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.underlyingAssetToken = Token.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.totalRefractedCAsset = reader.string();
          break;
        case 5:
          message.totalPAsset = reader.string();
          break;
        case 6:
          message.poolId = reader.string();
          break;
        case 7:
          message.exchangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.exchangeRateBlockHeight = reader.string();
          break;
        case 9:
          message.cPAssetExchangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.error = reader.string();
          break;
        case 11:
          message.hostChainId = reader.string();
          break;
        case 12:
          message.lastYieldBlockHeight = reader.string();
          break;
        case 13:
          message.apr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 14:
          message.annualYieldPerYAsset = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 15:
          message.yieldError = reader.string();
          break;
        case 16:
          message.displayName = reader.string();
          break;
        case 17:
          message.decimals = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Asset {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      cAssetToken: isSet(object.cAssetToken) ? Token.fromJSON(object.cAssetToken) : undefined,
      underlyingAssetToken: isSet(object.underlyingAssetToken) ? Token.fromJSON(object.underlyingAssetToken) : undefined,
      totalRefractedCAsset: isSet(object.totalRefractedCAsset) ? String(object.totalRefractedCAsset) : "",
      totalPAsset: isSet(object.totalPAsset) ? String(object.totalPAsset) : "",
      poolId: isSet(object.poolId) ? String(object.poolId) : undefined,
      exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : undefined,
      exchangeRateBlockHeight: isSet(object.exchangeRateBlockHeight) ? String(object.exchangeRateBlockHeight) : undefined,
      cPAssetExchangeRate: isSet(object.cPAssetExchangeRate) ? String(object.cPAssetExchangeRate) : undefined,
      error: isSet(object.error) ? String(object.error) : "",
      hostChainId: isSet(object.hostChainId) ? String(object.hostChainId) : "",
      lastYieldBlockHeight: isSet(object.lastYieldBlockHeight) ? String(object.lastYieldBlockHeight) : undefined,
      apr: isSet(object.apr) ? String(object.apr) : undefined,
      annualYieldPerYAsset: isSet(object.annualYieldPerYAsset) ? String(object.annualYieldPerYAsset) : undefined,
      yieldError: isSet(object.yieldError) ? String(object.yieldError) : "",
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      decimals: isSet(object.decimals) ? BigInt(object.decimals.toString()) : BigInt(0)
    };
  },
  toJSON(message: Asset): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.cAssetToken !== undefined && (obj.cAssetToken = message.cAssetToken ? Token.toJSON(message.cAssetToken) : undefined);
    message.underlyingAssetToken !== undefined && (obj.underlyingAssetToken = message.underlyingAssetToken ? Token.toJSON(message.underlyingAssetToken) : undefined);
    message.totalRefractedCAsset !== undefined && (obj.totalRefractedCAsset = message.totalRefractedCAsset);
    message.totalPAsset !== undefined && (obj.totalPAsset = message.totalPAsset);
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
    message.exchangeRateBlockHeight !== undefined && (obj.exchangeRateBlockHeight = message.exchangeRateBlockHeight);
    message.cPAssetExchangeRate !== undefined && (obj.cPAssetExchangeRate = message.cPAssetExchangeRate);
    message.error !== undefined && (obj.error = message.error);
    message.hostChainId !== undefined && (obj.hostChainId = message.hostChainId);
    message.lastYieldBlockHeight !== undefined && (obj.lastYieldBlockHeight = message.lastYieldBlockHeight);
    message.apr !== undefined && (obj.apr = message.apr);
    message.annualYieldPerYAsset !== undefined && (obj.annualYieldPerYAsset = message.annualYieldPerYAsset);
    message.yieldError !== undefined && (obj.yieldError = message.yieldError);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.decimals !== undefined && (obj.decimals = (message.decimals || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<Asset>): Asset {
    const message = createBaseAsset();
    message.id = object.id ?? "";
    message.cAssetToken = object.cAssetToken !== undefined && object.cAssetToken !== null ? Token.fromPartial(object.cAssetToken) : undefined;
    message.underlyingAssetToken = object.underlyingAssetToken !== undefined && object.underlyingAssetToken !== null ? Token.fromPartial(object.underlyingAssetToken) : undefined;
    message.totalRefractedCAsset = object.totalRefractedCAsset ?? "";
    message.totalPAsset = object.totalPAsset ?? "";
    message.poolId = object.poolId ?? undefined;
    message.exchangeRate = object.exchangeRate ?? undefined;
    message.exchangeRateBlockHeight = object.exchangeRateBlockHeight ?? undefined;
    message.cPAssetExchangeRate = object.cPAssetExchangeRate ?? undefined;
    message.error = object.error ?? "";
    message.hostChainId = object.hostChainId ?? "";
    message.lastYieldBlockHeight = object.lastYieldBlockHeight ?? undefined;
    message.apr = object.apr ?? undefined;
    message.annualYieldPerYAsset = object.annualYieldPerYAsset ?? undefined;
    message.yieldError = object.yieldError ?? "";
    message.displayName = object.displayName ?? "";
    message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AssetAmino): Asset {
    const message = createBaseAsset();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.c_asset_token !== undefined && object.c_asset_token !== null) {
      message.cAssetToken = Token.fromAmino(object.c_asset_token);
    }
    if (object.underlying_asset_token !== undefined && object.underlying_asset_token !== null) {
      message.underlyingAssetToken = Token.fromAmino(object.underlying_asset_token);
    }
    if (object.total_refracted_c_asset !== undefined && object.total_refracted_c_asset !== null) {
      message.totalRefractedCAsset = object.total_refracted_c_asset;
    }
    if (object.total_p_asset !== undefined && object.total_p_asset !== null) {
      message.totalPAsset = object.total_p_asset;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
      message.exchangeRate = object.exchange_rate;
    }
    if (object.exchange_rate_block_height !== undefined && object.exchange_rate_block_height !== null) {
      message.exchangeRateBlockHeight = object.exchange_rate_block_height;
    }
    if (object.c_p_asset_exchange_rate !== undefined && object.c_p_asset_exchange_rate !== null) {
      message.cPAssetExchangeRate = object.c_p_asset_exchange_rate;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    if (object.host_chain_id !== undefined && object.host_chain_id !== null) {
      message.hostChainId = object.host_chain_id;
    }
    if (object.last_yield_block_height !== undefined && object.last_yield_block_height !== null) {
      message.lastYieldBlockHeight = object.last_yield_block_height;
    }
    if (object.apr !== undefined && object.apr !== null) {
      message.apr = object.apr;
    }
    if (object.annual_yield_per_y_asset !== undefined && object.annual_yield_per_y_asset !== null) {
      message.annualYieldPerYAsset = object.annual_yield_per_y_asset;
    }
    if (object.yield_error !== undefined && object.yield_error !== null) {
      message.yieldError = object.yield_error;
    }
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = object.displayName;
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = BigInt(object.decimals);
    }
    return message;
  },
  toAmino(message: Asset, useInterfaces: boolean = true): AssetAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.c_asset_token = message.cAssetToken ? Token.toAmino(message.cAssetToken, useInterfaces) : undefined;
    obj.underlying_asset_token = message.underlyingAssetToken ? Token.toAmino(message.underlyingAssetToken, useInterfaces) : undefined;
    obj.total_refracted_c_asset = message.totalRefractedCAsset === "" ? undefined : message.totalRefractedCAsset;
    obj.total_p_asset = message.totalPAsset === "" ? undefined : message.totalPAsset;
    obj.pool_id = message.poolId === null ? undefined : message.poolId;
    obj.exchange_rate = padDecimal(message.exchangeRate) === null ? undefined : padDecimal(message.exchangeRate);
    obj.exchange_rate_block_height = message.exchangeRateBlockHeight === null ? undefined : message.exchangeRateBlockHeight;
    obj.c_p_asset_exchange_rate = padDecimal(message.cPAssetExchangeRate) === null ? undefined : padDecimal(message.cPAssetExchangeRate);
    obj.error = message.error === "" ? undefined : message.error;
    obj.host_chain_id = message.hostChainId === "" ? undefined : message.hostChainId;
    obj.last_yield_block_height = message.lastYieldBlockHeight === null ? undefined : message.lastYieldBlockHeight;
    obj.apr = padDecimal(message.apr) === null ? undefined : padDecimal(message.apr);
    obj.annual_yield_per_y_asset = padDecimal(message.annualYieldPerYAsset) === null ? undefined : padDecimal(message.annualYieldPerYAsset);
    obj.yield_error = message.yieldError === "" ? undefined : message.yieldError;
    obj.displayName = message.displayName === "" ? undefined : message.displayName;
    obj.decimals = message.decimals ? message.decimals.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AssetAminoMsg): Asset {
    return Asset.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetProtoMsg, useInterfaces: boolean = true): Asset {
    return Asset.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Asset): Uint8Array {
    return Asset.encode(message).finish();
  },
  toProtoMsg(message: Asset): AssetProtoMsg {
    return {
      typeUrl: "/pryzmatics.asset.Asset",
      value: Asset.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Asset.typeUrl, Asset);