import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface Ticker {
  tickerId: string;
  baseCurrency: string;
  targetCurrency: string;
  lastPrice: string;
  baseVolume: string;
  targetVolume: string;
  poolId: string;
  liquidityInUsd: string;
}
export interface TickerProtoMsg {
  typeUrl: "/pryzmatics.server.trade.Ticker";
  value: Uint8Array;
}
export interface TickerAmino {
  ticker_id?: string;
  base_currency?: string;
  target_currency?: string;
  last_price?: string;
  base_volume?: string;
  target_volume?: string;
  pool_id?: string;
  liquidity_in_usd?: string;
}
export interface TickerAminoMsg {
  type: "/pryzmatics.server.trade.Ticker";
  value: TickerAmino;
}
export interface TickerSDKType {
  ticker_id: string;
  base_currency: string;
  target_currency: string;
  last_price: string;
  base_volume: string;
  target_volume: string;
  pool_id: string;
  liquidity_in_usd: string;
}
export interface QueryTickersRequest {}
export interface QueryTickersRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryTickersRequest";
  value: Uint8Array;
}
export interface QueryTickersRequestAmino {}
export interface QueryTickersRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryTickersRequest";
  value: QueryTickersRequestAmino;
}
export interface QueryTickersRequestSDKType {}
export interface QueryTickersResponse {
  tickers: Ticker[];
}
export interface QueryTickersResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryTickersResponse";
  value: Uint8Array;
}
export interface QueryTickersResponseAmino {
  tickers?: TickerAmino[];
}
export interface QueryTickersResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryTickersResponse";
  value: QueryTickersResponseAmino;
}
export interface QueryTickersResponseSDKType {
  tickers: TickerSDKType[];
}
function createBaseTicker(): Ticker {
  return {
    tickerId: "",
    baseCurrency: "",
    targetCurrency: "",
    lastPrice: "",
    baseVolume: "",
    targetVolume: "",
    poolId: "",
    liquidityInUsd: ""
  };
}
export const Ticker = {
  typeUrl: "/pryzmatics.server.trade.Ticker",
  is(o: any): o is Ticker {
    return o && (o.$typeUrl === Ticker.typeUrl || typeof o.tickerId === "string" && typeof o.baseCurrency === "string" && typeof o.targetCurrency === "string" && typeof o.lastPrice === "string" && typeof o.baseVolume === "string" && typeof o.targetVolume === "string" && typeof o.poolId === "string" && typeof o.liquidityInUsd === "string");
  },
  isSDK(o: any): o is TickerSDKType {
    return o && (o.$typeUrl === Ticker.typeUrl || typeof o.ticker_id === "string" && typeof o.base_currency === "string" && typeof o.target_currency === "string" && typeof o.last_price === "string" && typeof o.base_volume === "string" && typeof o.target_volume === "string" && typeof o.pool_id === "string" && typeof o.liquidity_in_usd === "string");
  },
  isAmino(o: any): o is TickerAmino {
    return o && (o.$typeUrl === Ticker.typeUrl || typeof o.ticker_id === "string" && typeof o.base_currency === "string" && typeof o.target_currency === "string" && typeof o.last_price === "string" && typeof o.base_volume === "string" && typeof o.target_volume === "string" && typeof o.pool_id === "string" && typeof o.liquidity_in_usd === "string");
  },
  encode(message: Ticker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tickerId !== "") {
      writer.uint32(10).string(message.tickerId);
    }
    if (message.baseCurrency !== "") {
      writer.uint32(18).string(message.baseCurrency);
    }
    if (message.targetCurrency !== "") {
      writer.uint32(26).string(message.targetCurrency);
    }
    if (message.lastPrice !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.lastPrice, 18).atomics);
    }
    if (message.baseVolume !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.baseVolume, 18).atomics);
    }
    if (message.targetVolume !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.targetVolume, 18).atomics);
    }
    if (message.poolId !== "") {
      writer.uint32(58).string(message.poolId);
    }
    if (message.liquidityInUsd !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.liquidityInUsd, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Ticker {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTicker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tickerId = reader.string();
          break;
        case 2:
          message.baseCurrency = reader.string();
          break;
        case 3:
          message.targetCurrency = reader.string();
          break;
        case 4:
          message.lastPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.baseVolume = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.targetVolume = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.poolId = reader.string();
          break;
        case 8:
          message.liquidityInUsd = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Ticker {
    return {
      tickerId: isSet(object.tickerId) ? String(object.tickerId) : "",
      baseCurrency: isSet(object.baseCurrency) ? String(object.baseCurrency) : "",
      targetCurrency: isSet(object.targetCurrency) ? String(object.targetCurrency) : "",
      lastPrice: isSet(object.lastPrice) ? String(object.lastPrice) : "",
      baseVolume: isSet(object.baseVolume) ? String(object.baseVolume) : "",
      targetVolume: isSet(object.targetVolume) ? String(object.targetVolume) : "",
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      liquidityInUsd: isSet(object.liquidityInUsd) ? String(object.liquidityInUsd) : ""
    };
  },
  toJSON(message: Ticker): unknown {
    const obj: any = {};
    message.tickerId !== undefined && (obj.tickerId = message.tickerId);
    message.baseCurrency !== undefined && (obj.baseCurrency = message.baseCurrency);
    message.targetCurrency !== undefined && (obj.targetCurrency = message.targetCurrency);
    message.lastPrice !== undefined && (obj.lastPrice = message.lastPrice);
    message.baseVolume !== undefined && (obj.baseVolume = message.baseVolume);
    message.targetVolume !== undefined && (obj.targetVolume = message.targetVolume);
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.liquidityInUsd !== undefined && (obj.liquidityInUsd = message.liquidityInUsd);
    return obj;
  },
  fromPartial(object: Partial<Ticker>): Ticker {
    const message = createBaseTicker();
    message.tickerId = object.tickerId ?? "";
    message.baseCurrency = object.baseCurrency ?? "";
    message.targetCurrency = object.targetCurrency ?? "";
    message.lastPrice = object.lastPrice ?? "";
    message.baseVolume = object.baseVolume ?? "";
    message.targetVolume = object.targetVolume ?? "";
    message.poolId = object.poolId ?? "";
    message.liquidityInUsd = object.liquidityInUsd ?? "";
    return message;
  },
  fromAmino(object: TickerAmino): Ticker {
    const message = createBaseTicker();
    if (object.ticker_id !== undefined && object.ticker_id !== null) {
      message.tickerId = object.ticker_id;
    }
    if (object.base_currency !== undefined && object.base_currency !== null) {
      message.baseCurrency = object.base_currency;
    }
    if (object.target_currency !== undefined && object.target_currency !== null) {
      message.targetCurrency = object.target_currency;
    }
    if (object.last_price !== undefined && object.last_price !== null) {
      message.lastPrice = object.last_price;
    }
    if (object.base_volume !== undefined && object.base_volume !== null) {
      message.baseVolume = object.base_volume;
    }
    if (object.target_volume !== undefined && object.target_volume !== null) {
      message.targetVolume = object.target_volume;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = object.pool_id;
    }
    if (object.liquidity_in_usd !== undefined && object.liquidity_in_usd !== null) {
      message.liquidityInUsd = object.liquidity_in_usd;
    }
    return message;
  },
  toAmino(message: Ticker, useInterfaces: boolean = true): TickerAmino {
    const obj: any = {};
    obj.ticker_id = message.tickerId === "" ? undefined : message.tickerId;
    obj.base_currency = message.baseCurrency === "" ? undefined : message.baseCurrency;
    obj.target_currency = message.targetCurrency === "" ? undefined : message.targetCurrency;
    obj.last_price = padDecimal(message.lastPrice) === "" ? undefined : padDecimal(message.lastPrice);
    obj.base_volume = padDecimal(message.baseVolume) === "" ? undefined : padDecimal(message.baseVolume);
    obj.target_volume = padDecimal(message.targetVolume) === "" ? undefined : padDecimal(message.targetVolume);
    obj.pool_id = message.poolId === "" ? undefined : message.poolId;
    obj.liquidity_in_usd = padDecimal(message.liquidityInUsd) === "" ? undefined : padDecimal(message.liquidityInUsd);
    return obj;
  },
  fromAminoMsg(object: TickerAminoMsg): Ticker {
    return Ticker.fromAmino(object.value);
  },
  fromProtoMsg(message: TickerProtoMsg, useInterfaces: boolean = true): Ticker {
    return Ticker.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Ticker): Uint8Array {
    return Ticker.encode(message).finish();
  },
  toProtoMsg(message: Ticker): TickerProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.Ticker",
      value: Ticker.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Ticker.typeUrl, Ticker);
function createBaseQueryTickersRequest(): QueryTickersRequest {
  return {};
}
export const QueryTickersRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryTickersRequest",
  is(o: any): o is QueryTickersRequest {
    return o && o.$typeUrl === QueryTickersRequest.typeUrl;
  },
  isSDK(o: any): o is QueryTickersRequestSDKType {
    return o && o.$typeUrl === QueryTickersRequest.typeUrl;
  },
  isAmino(o: any): o is QueryTickersRequestAmino {
    return o && o.$typeUrl === QueryTickersRequest.typeUrl;
  },
  encode(_: QueryTickersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTickersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTickersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryTickersRequest {
    return {};
  },
  toJSON(_: QueryTickersRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryTickersRequest>): QueryTickersRequest {
    const message = createBaseQueryTickersRequest();
    return message;
  },
  fromAmino(_: QueryTickersRequestAmino): QueryTickersRequest {
    const message = createBaseQueryTickersRequest();
    return message;
  },
  toAmino(_: QueryTickersRequest, useInterfaces: boolean = true): QueryTickersRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTickersRequestAminoMsg): QueryTickersRequest {
    return QueryTickersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTickersRequestProtoMsg, useInterfaces: boolean = true): QueryTickersRequest {
    return QueryTickersRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTickersRequest): Uint8Array {
    return QueryTickersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTickersRequest): QueryTickersRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryTickersRequest",
      value: QueryTickersRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTickersRequest.typeUrl, QueryTickersRequest);
function createBaseQueryTickersResponse(): QueryTickersResponse {
  return {
    tickers: []
  };
}
export const QueryTickersResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryTickersResponse",
  is(o: any): o is QueryTickersResponse {
    return o && (o.$typeUrl === QueryTickersResponse.typeUrl || Array.isArray(o.tickers) && (!o.tickers.length || Ticker.is(o.tickers[0])));
  },
  isSDK(o: any): o is QueryTickersResponseSDKType {
    return o && (o.$typeUrl === QueryTickersResponse.typeUrl || Array.isArray(o.tickers) && (!o.tickers.length || Ticker.isSDK(o.tickers[0])));
  },
  isAmino(o: any): o is QueryTickersResponseAmino {
    return o && (o.$typeUrl === QueryTickersResponse.typeUrl || Array.isArray(o.tickers) && (!o.tickers.length || Ticker.isAmino(o.tickers[0])));
  },
  encode(message: QueryTickersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tickers) {
      Ticker.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryTickersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTickersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tickers.push(Ticker.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTickersResponse {
    return {
      tickers: Array.isArray(object?.tickers) ? object.tickers.map((e: any) => Ticker.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryTickersResponse): unknown {
    const obj: any = {};
    if (message.tickers) {
      obj.tickers = message.tickers.map(e => e ? Ticker.toJSON(e) : undefined);
    } else {
      obj.tickers = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryTickersResponse>): QueryTickersResponse {
    const message = createBaseQueryTickersResponse();
    message.tickers = object.tickers?.map(e => Ticker.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTickersResponseAmino): QueryTickersResponse {
    const message = createBaseQueryTickersResponse();
    message.tickers = object.tickers?.map(e => Ticker.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTickersResponse, useInterfaces: boolean = true): QueryTickersResponseAmino {
    const obj: any = {};
    if (message.tickers) {
      obj.tickers = message.tickers.map(e => e ? Ticker.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.tickers = message.tickers;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTickersResponseAminoMsg): QueryTickersResponse {
    return QueryTickersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTickersResponseProtoMsg, useInterfaces: boolean = true): QueryTickersResponse {
    return QueryTickersResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryTickersResponse): Uint8Array {
    return QueryTickersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTickersResponse): QueryTickersResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryTickersResponse",
      value: QueryTickersResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTickersResponse.typeUrl, QueryTickersResponse);