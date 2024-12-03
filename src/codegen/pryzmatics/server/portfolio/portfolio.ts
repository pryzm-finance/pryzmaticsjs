import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Token, TokenAmino, TokenSDKType } from "../../pool/token";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
export enum PortfolioTokenCategory {
  ANY = 0,
  BANK_SPENDABLE_BALANCE = 1,
  Y_STAKING = 2,
  Y_LAUNCH_STAKING = 3,
  P_GOV = 4,
  INCENTIVES = 5,
  ALLIANCE = 6,
  UNRECOGNIZED = -1,
}
export const PortfolioTokenCategorySDKType = PortfolioTokenCategory;
export const PortfolioTokenCategoryAmino = PortfolioTokenCategory;
export function portfolioTokenCategoryFromJSON(object: any): PortfolioTokenCategory {
  switch (object) {
    case 0:
    case "ANY":
      return PortfolioTokenCategory.ANY;
    case 1:
    case "BANK_SPENDABLE_BALANCE":
      return PortfolioTokenCategory.BANK_SPENDABLE_BALANCE;
    case 2:
    case "Y_STAKING":
      return PortfolioTokenCategory.Y_STAKING;
    case 3:
    case "Y_LAUNCH_STAKING":
      return PortfolioTokenCategory.Y_LAUNCH_STAKING;
    case 4:
    case "P_GOV":
      return PortfolioTokenCategory.P_GOV;
    case 5:
    case "INCENTIVES":
      return PortfolioTokenCategory.INCENTIVES;
    case 6:
    case "ALLIANCE":
      return PortfolioTokenCategory.ALLIANCE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PortfolioTokenCategory.UNRECOGNIZED;
  }
}
export function portfolioTokenCategoryToJSON(object: PortfolioTokenCategory): string {
  switch (object) {
    case PortfolioTokenCategory.ANY:
      return "ANY";
    case PortfolioTokenCategory.BANK_SPENDABLE_BALANCE:
      return "BANK_SPENDABLE_BALANCE";
    case PortfolioTokenCategory.Y_STAKING:
      return "Y_STAKING";
    case PortfolioTokenCategory.Y_LAUNCH_STAKING:
      return "Y_LAUNCH_STAKING";
    case PortfolioTokenCategory.P_GOV:
      return "P_GOV";
    case PortfolioTokenCategory.INCENTIVES:
      return "INCENTIVES";
    case PortfolioTokenCategory.ALLIANCE:
      return "ALLIANCE";
    case PortfolioTokenCategory.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface QueryPortfolioRequest {
  address: string;
}
export interface QueryPortfolioRequestProtoMsg {
  typeUrl: "/pryzmatics.server.portfolio.QueryPortfolioRequest";
  value: Uint8Array;
}
export interface QueryPortfolioRequestAmino {
  address?: string;
}
export interface QueryPortfolioRequestAminoMsg {
  type: "/pryzmatics.server.portfolio.QueryPortfolioRequest";
  value: QueryPortfolioRequestAmino;
}
export interface QueryPortfolioRequestSDKType {
  address: string;
}
export interface PortfolioToken {
  coin: Coin;
  category: PortfolioTokenCategory;
  valueInStableCoinTerms?: string;
  valueInAssetTerms?: string;
  token?: Token;
}
export interface PortfolioTokenProtoMsg {
  typeUrl: "/pryzmatics.server.portfolio.PortfolioToken";
  value: Uint8Array;
}
export interface PortfolioTokenAmino {
  coin?: CoinAmino;
  category?: PortfolioTokenCategory;
  value_in_stable_coin_terms?: string;
  value_in_asset_terms?: string;
  token?: TokenAmino;
}
export interface PortfolioTokenAminoMsg {
  type: "/pryzmatics.server.portfolio.PortfolioToken";
  value: PortfolioTokenAmino;
}
export interface PortfolioTokenSDKType {
  coin: CoinSDKType;
  category: PortfolioTokenCategory;
  value_in_stable_coin_terms?: string;
  value_in_asset_terms?: string;
  token?: TokenSDKType;
}
export interface QueryPortfolioResponse {
  tokens: PortfolioToken[];
}
export interface QueryPortfolioResponseProtoMsg {
  typeUrl: "/pryzmatics.server.portfolio.QueryPortfolioResponse";
  value: Uint8Array;
}
export interface QueryPortfolioResponseAmino {
  tokens?: PortfolioTokenAmino[];
}
export interface QueryPortfolioResponseAminoMsg {
  type: "/pryzmatics.server.portfolio.QueryPortfolioResponse";
  value: QueryPortfolioResponseAmino;
}
export interface QueryPortfolioResponseSDKType {
  tokens: PortfolioTokenSDKType[];
}
function createBaseQueryPortfolioRequest(): QueryPortfolioRequest {
  return {
    address: ""
  };
}
export const QueryPortfolioRequest = {
  typeUrl: "/pryzmatics.server.portfolio.QueryPortfolioRequest",
  is(o: any): o is QueryPortfolioRequest {
    return o && (o.$typeUrl === QueryPortfolioRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryPortfolioRequestSDKType {
    return o && (o.$typeUrl === QueryPortfolioRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryPortfolioRequestAmino {
    return o && (o.$typeUrl === QueryPortfolioRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryPortfolioRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPortfolioRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPortfolioRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPortfolioRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryPortfolioRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryPortfolioRequest>): QueryPortfolioRequest {
    const message = createBaseQueryPortfolioRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryPortfolioRequestAmino): QueryPortfolioRequest {
    const message = createBaseQueryPortfolioRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryPortfolioRequest, useInterfaces: boolean = true): QueryPortfolioRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryPortfolioRequestAminoMsg): QueryPortfolioRequest {
    return QueryPortfolioRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPortfolioRequestProtoMsg, useInterfaces: boolean = true): QueryPortfolioRequest {
    return QueryPortfolioRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPortfolioRequest): Uint8Array {
    return QueryPortfolioRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPortfolioRequest): QueryPortfolioRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.portfolio.QueryPortfolioRequest",
      value: QueryPortfolioRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPortfolioRequest.typeUrl, QueryPortfolioRequest);
function createBasePortfolioToken(): PortfolioToken {
  return {
    coin: Coin.fromPartial({}),
    category: 0,
    valueInStableCoinTerms: undefined,
    valueInAssetTerms: undefined,
    token: undefined
  };
}
export const PortfolioToken = {
  typeUrl: "/pryzmatics.server.portfolio.PortfolioToken",
  is(o: any): o is PortfolioToken {
    return o && (o.$typeUrl === PortfolioToken.typeUrl || Coin.is(o.coin) && isSet(o.category));
  },
  isSDK(o: any): o is PortfolioTokenSDKType {
    return o && (o.$typeUrl === PortfolioToken.typeUrl || Coin.isSDK(o.coin) && isSet(o.category));
  },
  isAmino(o: any): o is PortfolioTokenAmino {
    return o && (o.$typeUrl === PortfolioToken.typeUrl || Coin.isAmino(o.coin) && isSet(o.category));
  },
  encode(message: PortfolioToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    if (message.category !== 0) {
      writer.uint32(16).int32(message.category);
    }
    if (message.valueInStableCoinTerms !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.valueInStableCoinTerms, 18).atomics);
    }
    if (message.valueInAssetTerms !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.valueInAssetTerms, 18).atomics);
    }
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PortfolioToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortfolioToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coin = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.category = (reader.int32() as any);
          break;
        case 3:
          message.valueInStableCoinTerms = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.valueInAssetTerms = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.token = Token.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PortfolioToken {
    return {
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      category: isSet(object.category) ? portfolioTokenCategoryFromJSON(object.category) : -1,
      valueInStableCoinTerms: isSet(object.valueInStableCoinTerms) ? String(object.valueInStableCoinTerms) : undefined,
      valueInAssetTerms: isSet(object.valueInAssetTerms) ? String(object.valueInAssetTerms) : undefined,
      token: isSet(object.token) ? Token.fromJSON(object.token) : undefined
    };
  },
  toJSON(message: PortfolioToken): unknown {
    const obj: any = {};
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.category !== undefined && (obj.category = portfolioTokenCategoryToJSON(message.category));
    message.valueInStableCoinTerms !== undefined && (obj.valueInStableCoinTerms = message.valueInStableCoinTerms);
    message.valueInAssetTerms !== undefined && (obj.valueInAssetTerms = message.valueInAssetTerms);
    message.token !== undefined && (obj.token = message.token ? Token.toJSON(message.token) : undefined);
    return obj;
  },
  fromPartial(object: Partial<PortfolioToken>): PortfolioToken {
    const message = createBasePortfolioToken();
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    message.category = object.category ?? 0;
    message.valueInStableCoinTerms = object.valueInStableCoinTerms ?? undefined;
    message.valueInAssetTerms = object.valueInAssetTerms ?? undefined;
    message.token = object.token !== undefined && object.token !== null ? Token.fromPartial(object.token) : undefined;
    return message;
  },
  fromAmino(object: PortfolioTokenAmino): PortfolioToken {
    const message = createBasePortfolioToken();
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    }
    if (object.value_in_stable_coin_terms !== undefined && object.value_in_stable_coin_terms !== null) {
      message.valueInStableCoinTerms = object.value_in_stable_coin_terms;
    }
    if (object.value_in_asset_terms !== undefined && object.value_in_asset_terms !== null) {
      message.valueInAssetTerms = object.value_in_asset_terms;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = Token.fromAmino(object.token);
    }
    return message;
  },
  toAmino(message: PortfolioToken, useInterfaces: boolean = true): PortfolioTokenAmino {
    const obj: any = {};
    obj.coin = message.coin ? Coin.toAmino(message.coin, useInterfaces) : undefined;
    obj.category = message.category === 0 ? undefined : message.category;
    obj.value_in_stable_coin_terms = padDecimal(message.valueInStableCoinTerms) === null ? undefined : padDecimal(message.valueInStableCoinTerms);
    obj.value_in_asset_terms = padDecimal(message.valueInAssetTerms) === null ? undefined : padDecimal(message.valueInAssetTerms);
    obj.token = message.token ? Token.toAmino(message.token, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: PortfolioTokenAminoMsg): PortfolioToken {
    return PortfolioToken.fromAmino(object.value);
  },
  fromProtoMsg(message: PortfolioTokenProtoMsg, useInterfaces: boolean = true): PortfolioToken {
    return PortfolioToken.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PortfolioToken): Uint8Array {
    return PortfolioToken.encode(message).finish();
  },
  toProtoMsg(message: PortfolioToken): PortfolioTokenProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.portfolio.PortfolioToken",
      value: PortfolioToken.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PortfolioToken.typeUrl, PortfolioToken);
function createBaseQueryPortfolioResponse(): QueryPortfolioResponse {
  return {
    tokens: []
  };
}
export const QueryPortfolioResponse = {
  typeUrl: "/pryzmatics.server.portfolio.QueryPortfolioResponse",
  is(o: any): o is QueryPortfolioResponse {
    return o && (o.$typeUrl === QueryPortfolioResponse.typeUrl || Array.isArray(o.tokens) && (!o.tokens.length || PortfolioToken.is(o.tokens[0])));
  },
  isSDK(o: any): o is QueryPortfolioResponseSDKType {
    return o && (o.$typeUrl === QueryPortfolioResponse.typeUrl || Array.isArray(o.tokens) && (!o.tokens.length || PortfolioToken.isSDK(o.tokens[0])));
  },
  isAmino(o: any): o is QueryPortfolioResponseAmino {
    return o && (o.$typeUrl === QueryPortfolioResponse.typeUrl || Array.isArray(o.tokens) && (!o.tokens.length || PortfolioToken.isAmino(o.tokens[0])));
  },
  encode(message: QueryPortfolioResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokens) {
      PortfolioToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPortfolioResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPortfolioResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens.push(PortfolioToken.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPortfolioResponse {
    return {
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => PortfolioToken.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryPortfolioResponse): unknown {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? PortfolioToken.toJSON(e) : undefined);
    } else {
      obj.tokens = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryPortfolioResponse>): QueryPortfolioResponse {
    const message = createBaseQueryPortfolioResponse();
    message.tokens = object.tokens?.map(e => PortfolioToken.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPortfolioResponseAmino): QueryPortfolioResponse {
    const message = createBaseQueryPortfolioResponse();
    message.tokens = object.tokens?.map(e => PortfolioToken.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPortfolioResponse, useInterfaces: boolean = true): QueryPortfolioResponseAmino {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? PortfolioToken.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.tokens = message.tokens;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPortfolioResponseAminoMsg): QueryPortfolioResponse {
    return QueryPortfolioResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPortfolioResponseProtoMsg, useInterfaces: boolean = true): QueryPortfolioResponse {
    return QueryPortfolioResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPortfolioResponse): Uint8Array {
    return QueryPortfolioResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPortfolioResponse): QueryPortfolioResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.portfolio.QueryPortfolioResponse",
      value: QueryPortfolioResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPortfolioResponse.typeUrl, QueryPortfolioResponse);