import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { SealPairOrderBy, SealPairOrderByAmino, SealPairOrderBySDKType } from "../../database/seal/pair";
import { PairInfo, PairInfoAmino, PairInfoSDKType } from "../../seal/pair";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
export interface QuerySealPairsRequest {
  pagination?: PageRequest;
  reservableOnly: boolean;
  tokenIn: string;
  tokenOut: string;
  excludeEmpty: boolean;
  orderBy?: SealPairOrderBy;
}
export interface QuerySealPairsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.seal.QuerySealPairsRequest";
  value: Uint8Array;
}
export interface QuerySealPairsRequestAmino {
  pagination?: PageRequestAmino;
  reservable_only?: boolean;
  token_in?: string;
  token_out?: string;
  exclude_empty?: boolean;
  order_by?: SealPairOrderByAmino;
}
export interface QuerySealPairsRequestAminoMsg {
  type: "/pryzmatics.server.seal.QuerySealPairsRequest";
  value: QuerySealPairsRequestAmino;
}
export interface QuerySealPairsRequestSDKType {
  pagination?: PageRequestSDKType;
  reservable_only: boolean;
  token_in: string;
  token_out: string;
  exclude_empty: boolean;
  order_by?: SealPairOrderBySDKType;
}
export interface QuerySealPairsResponse {
  pairs: PairInfo[];
  pagination?: PageResponse;
}
export interface QuerySealPairsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.seal.QuerySealPairsResponse";
  value: Uint8Array;
}
export interface QuerySealPairsResponseAmino {
  pairs?: PairInfoAmino[];
  pagination?: PageResponseAmino;
}
export interface QuerySealPairsResponseAminoMsg {
  type: "/pryzmatics.server.seal.QuerySealPairsResponse";
  value: QuerySealPairsResponseAmino;
}
export interface QuerySealPairsResponseSDKType {
  pairs: PairInfoSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QuerySealPairSummaryRequest {
  tokenIn: string;
  tokenOut: string;
  maxPrice: string;
}
export interface QuerySealPairSummaryRequestProtoMsg {
  typeUrl: "/pryzmatics.server.seal.QuerySealPairSummaryRequest";
  value: Uint8Array;
}
export interface QuerySealPairSummaryRequestAmino {
  token_in?: string;
  token_out?: string;
  max_price?: string;
}
export interface QuerySealPairSummaryRequestAminoMsg {
  type: "/pryzmatics.server.seal.QuerySealPairSummaryRequest";
  value: QuerySealPairSummaryRequestAmino;
}
export interface QuerySealPairSummaryRequestSDKType {
  token_in: string;
  token_out: string;
  max_price: string;
}
export interface QuerySealPairSummaryResponse {
  reservableVolume: string;
}
export interface QuerySealPairSummaryResponseProtoMsg {
  typeUrl: "/pryzmatics.server.seal.QuerySealPairSummaryResponse";
  value: Uint8Array;
}
export interface QuerySealPairSummaryResponseAmino {
  reservable_volume?: string;
}
export interface QuerySealPairSummaryResponseAminoMsg {
  type: "/pryzmatics.server.seal.QuerySealPairSummaryResponse";
  value: QuerySealPairSummaryResponseAmino;
}
export interface QuerySealPairSummaryResponseSDKType {
  reservable_volume: string;
}
export interface QuerySealPairPriceRequest {
  tokenIn: string;
  tokenOut: string;
}
export interface QuerySealPairPriceRequestProtoMsg {
  typeUrl: "/pryzmatics.server.seal.QuerySealPairPriceRequest";
  value: Uint8Array;
}
export interface QuerySealPairPriceRequestAmino {
  token_in?: string;
  token_out?: string;
}
export interface QuerySealPairPriceRequestAminoMsg {
  type: "/pryzmatics.server.seal.QuerySealPairPriceRequest";
  value: QuerySealPairPriceRequestAmino;
}
export interface QuerySealPairPriceRequestSDKType {
  token_in: string;
  token_out: string;
}
export interface QuerySealPairPriceResponse {
  tokenInPrice?: string;
  tokenOutPrice?: string;
  tokenInPriceInTermsOfTokenOut?: string;
  tokenOutPriceInTermsOfTokenIn?: string;
}
export interface QuerySealPairPriceResponseProtoMsg {
  typeUrl: "/pryzmatics.server.seal.QuerySealPairPriceResponse";
  value: Uint8Array;
}
export interface QuerySealPairPriceResponseAmino {
  token_in_price?: string;
  token_out_price?: string;
  token_in_price_in_terms_of_token_out?: string;
  token_out_price_in_terms_of_token_in?: string;
}
export interface QuerySealPairPriceResponseAminoMsg {
  type: "/pryzmatics.server.seal.QuerySealPairPriceResponse";
  value: QuerySealPairPriceResponseAmino;
}
export interface QuerySealPairPriceResponseSDKType {
  token_in_price?: string;
  token_out_price?: string;
  token_in_price_in_terms_of_token_out?: string;
  token_out_price_in_terms_of_token_in?: string;
}
function createBaseQuerySealPairsRequest(): QuerySealPairsRequest {
  return {
    pagination: undefined,
    reservableOnly: false,
    tokenIn: "",
    tokenOut: "",
    excludeEmpty: false,
    orderBy: undefined
  };
}
export const QuerySealPairsRequest = {
  typeUrl: "/pryzmatics.server.seal.QuerySealPairsRequest",
  is(o: any): o is QuerySealPairsRequest {
    return o && (o.$typeUrl === QuerySealPairsRequest.typeUrl || typeof o.reservableOnly === "boolean" && typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && typeof o.excludeEmpty === "boolean");
  },
  isSDK(o: any): o is QuerySealPairsRequestSDKType {
    return o && (o.$typeUrl === QuerySealPairsRequest.typeUrl || typeof o.reservable_only === "boolean" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.exclude_empty === "boolean");
  },
  isAmino(o: any): o is QuerySealPairsRequestAmino {
    return o && (o.$typeUrl === QuerySealPairsRequest.typeUrl || typeof o.reservable_only === "boolean" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.exclude_empty === "boolean");
  },
  encode(message: QuerySealPairsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.reservableOnly === true) {
      writer.uint32(16).bool(message.reservableOnly);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    if (message.excludeEmpty === true) {
      writer.uint32(40).bool(message.excludeEmpty);
    }
    if (message.orderBy !== undefined) {
      SealPairOrderBy.encode(message.orderBy, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySealPairsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySealPairsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.reservableOnly = reader.bool();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        case 5:
          message.excludeEmpty = reader.bool();
          break;
        case 6:
          message.orderBy = SealPairOrderBy.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySealPairsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      reservableOnly: isSet(object.reservableOnly) ? Boolean(object.reservableOnly) : false,
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      excludeEmpty: isSet(object.excludeEmpty) ? Boolean(object.excludeEmpty) : false,
      orderBy: isSet(object.orderBy) ? SealPairOrderBy.fromJSON(object.orderBy) : undefined
    };
  },
  toJSON(message: QuerySealPairsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.reservableOnly !== undefined && (obj.reservableOnly = message.reservableOnly);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.excludeEmpty !== undefined && (obj.excludeEmpty = message.excludeEmpty);
    message.orderBy !== undefined && (obj.orderBy = message.orderBy ? SealPairOrderBy.toJSON(message.orderBy) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySealPairsRequest>): QuerySealPairsRequest {
    const message = createBaseQuerySealPairsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.reservableOnly = object.reservableOnly ?? false;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.excludeEmpty = object.excludeEmpty ?? false;
    message.orderBy = object.orderBy !== undefined && object.orderBy !== null ? SealPairOrderBy.fromPartial(object.orderBy) : undefined;
    return message;
  },
  fromAmino(object: QuerySealPairsRequestAmino): QuerySealPairsRequest {
    const message = createBaseQuerySealPairsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.reservable_only !== undefined && object.reservable_only !== null) {
      message.reservableOnly = object.reservable_only;
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.exclude_empty !== undefined && object.exclude_empty !== null) {
      message.excludeEmpty = object.exclude_empty;
    }
    if (object.order_by !== undefined && object.order_by !== null) {
      message.orderBy = SealPairOrderBy.fromAmino(object.order_by);
    }
    return message;
  },
  toAmino(message: QuerySealPairsRequest, useInterfaces: boolean = true): QuerySealPairsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    obj.reservable_only = message.reservableOnly === false ? undefined : message.reservableOnly;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.exclude_empty = message.excludeEmpty === false ? undefined : message.excludeEmpty;
    obj.order_by = message.orderBy ? SealPairOrderBy.toAmino(message.orderBy, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySealPairsRequestAminoMsg): QuerySealPairsRequest {
    return QuerySealPairsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySealPairsRequestProtoMsg, useInterfaces: boolean = true): QuerySealPairsRequest {
    return QuerySealPairsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySealPairsRequest): Uint8Array {
    return QuerySealPairsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySealPairsRequest): QuerySealPairsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.seal.QuerySealPairsRequest",
      value: QuerySealPairsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySealPairsRequest.typeUrl, QuerySealPairsRequest);
function createBaseQuerySealPairsResponse(): QuerySealPairsResponse {
  return {
    pairs: [],
    pagination: undefined
  };
}
export const QuerySealPairsResponse = {
  typeUrl: "/pryzmatics.server.seal.QuerySealPairsResponse",
  is(o: any): o is QuerySealPairsResponse {
    return o && (o.$typeUrl === QuerySealPairsResponse.typeUrl || Array.isArray(o.pairs) && (!o.pairs.length || PairInfo.is(o.pairs[0])));
  },
  isSDK(o: any): o is QuerySealPairsResponseSDKType {
    return o && (o.$typeUrl === QuerySealPairsResponse.typeUrl || Array.isArray(o.pairs) && (!o.pairs.length || PairInfo.isSDK(o.pairs[0])));
  },
  isAmino(o: any): o is QuerySealPairsResponseAmino {
    return o && (o.$typeUrl === QuerySealPairsResponse.typeUrl || Array.isArray(o.pairs) && (!o.pairs.length || PairInfo.isAmino(o.pairs[0])));
  },
  encode(message: QuerySealPairsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pairs) {
      PairInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySealPairsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySealPairsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(PairInfo.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySealPairsResponse {
    return {
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => PairInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QuerySealPairsResponse): unknown {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? PairInfo.toJSON(e) : undefined);
    } else {
      obj.pairs = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySealPairsResponse>): QuerySealPairsResponse {
    const message = createBaseQuerySealPairsResponse();
    message.pairs = object.pairs?.map(e => PairInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySealPairsResponseAmino): QuerySealPairsResponse {
    const message = createBaseQuerySealPairsResponse();
    message.pairs = object.pairs?.map(e => PairInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySealPairsResponse, useInterfaces: boolean = true): QuerySealPairsResponseAmino {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? PairInfo.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.pairs = message.pairs;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySealPairsResponseAminoMsg): QuerySealPairsResponse {
    return QuerySealPairsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySealPairsResponseProtoMsg, useInterfaces: boolean = true): QuerySealPairsResponse {
    return QuerySealPairsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySealPairsResponse): Uint8Array {
    return QuerySealPairsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySealPairsResponse): QuerySealPairsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.seal.QuerySealPairsResponse",
      value: QuerySealPairsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySealPairsResponse.typeUrl, QuerySealPairsResponse);
function createBaseQuerySealPairSummaryRequest(): QuerySealPairSummaryRequest {
  return {
    tokenIn: "",
    tokenOut: "",
    maxPrice: ""
  };
}
export const QuerySealPairSummaryRequest = {
  typeUrl: "/pryzmatics.server.seal.QuerySealPairSummaryRequest",
  is(o: any): o is QuerySealPairSummaryRequest {
    return o && (o.$typeUrl === QuerySealPairSummaryRequest.typeUrl || typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && typeof o.maxPrice === "string");
  },
  isSDK(o: any): o is QuerySealPairSummaryRequestSDKType {
    return o && (o.$typeUrl === QuerySealPairSummaryRequest.typeUrl || typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.max_price === "string");
  },
  isAmino(o: any): o is QuerySealPairSummaryRequestAmino {
    return o && (o.$typeUrl === QuerySealPairSummaryRequest.typeUrl || typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.max_price === "string");
  },
  encode(message: QuerySealPairSummaryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenIn !== "") {
      writer.uint32(10).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(18).string(message.tokenOut);
    }
    if (message.maxPrice !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.maxPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySealPairSummaryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySealPairSummaryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenIn = reader.string();
          break;
        case 2:
          message.tokenOut = reader.string();
          break;
        case 3:
          message.maxPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySealPairSummaryRequest {
    return {
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      maxPrice: isSet(object.maxPrice) ? String(object.maxPrice) : ""
    };
  },
  toJSON(message: QuerySealPairSummaryRequest): unknown {
    const obj: any = {};
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.maxPrice !== undefined && (obj.maxPrice = message.maxPrice);
    return obj;
  },
  fromPartial(object: Partial<QuerySealPairSummaryRequest>): QuerySealPairSummaryRequest {
    const message = createBaseQuerySealPairSummaryRequest();
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.maxPrice = object.maxPrice ?? "";
    return message;
  },
  fromAmino(object: QuerySealPairSummaryRequestAmino): QuerySealPairSummaryRequest {
    const message = createBaseQuerySealPairSummaryRequest();
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.max_price !== undefined && object.max_price !== null) {
      message.maxPrice = object.max_price;
    }
    return message;
  },
  toAmino(message: QuerySealPairSummaryRequest, useInterfaces: boolean = true): QuerySealPairSummaryRequestAmino {
    const obj: any = {};
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.max_price = padDecimal(message.maxPrice) === "" ? undefined : padDecimal(message.maxPrice);
    return obj;
  },
  fromAminoMsg(object: QuerySealPairSummaryRequestAminoMsg): QuerySealPairSummaryRequest {
    return QuerySealPairSummaryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySealPairSummaryRequestProtoMsg, useInterfaces: boolean = true): QuerySealPairSummaryRequest {
    return QuerySealPairSummaryRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySealPairSummaryRequest): Uint8Array {
    return QuerySealPairSummaryRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySealPairSummaryRequest): QuerySealPairSummaryRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.seal.QuerySealPairSummaryRequest",
      value: QuerySealPairSummaryRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySealPairSummaryRequest.typeUrl, QuerySealPairSummaryRequest);
function createBaseQuerySealPairSummaryResponse(): QuerySealPairSummaryResponse {
  return {
    reservableVolume: ""
  };
}
export const QuerySealPairSummaryResponse = {
  typeUrl: "/pryzmatics.server.seal.QuerySealPairSummaryResponse",
  is(o: any): o is QuerySealPairSummaryResponse {
    return o && (o.$typeUrl === QuerySealPairSummaryResponse.typeUrl || typeof o.reservableVolume === "string");
  },
  isSDK(o: any): o is QuerySealPairSummaryResponseSDKType {
    return o && (o.$typeUrl === QuerySealPairSummaryResponse.typeUrl || typeof o.reservable_volume === "string");
  },
  isAmino(o: any): o is QuerySealPairSummaryResponseAmino {
    return o && (o.$typeUrl === QuerySealPairSummaryResponse.typeUrl || typeof o.reservable_volume === "string");
  },
  encode(message: QuerySealPairSummaryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reservableVolume !== "") {
      writer.uint32(10).string(message.reservableVolume);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySealPairSummaryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySealPairSummaryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reservableVolume = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySealPairSummaryResponse {
    return {
      reservableVolume: isSet(object.reservableVolume) ? String(object.reservableVolume) : ""
    };
  },
  toJSON(message: QuerySealPairSummaryResponse): unknown {
    const obj: any = {};
    message.reservableVolume !== undefined && (obj.reservableVolume = message.reservableVolume);
    return obj;
  },
  fromPartial(object: Partial<QuerySealPairSummaryResponse>): QuerySealPairSummaryResponse {
    const message = createBaseQuerySealPairSummaryResponse();
    message.reservableVolume = object.reservableVolume ?? "";
    return message;
  },
  fromAmino(object: QuerySealPairSummaryResponseAmino): QuerySealPairSummaryResponse {
    const message = createBaseQuerySealPairSummaryResponse();
    if (object.reservable_volume !== undefined && object.reservable_volume !== null) {
      message.reservableVolume = object.reservable_volume;
    }
    return message;
  },
  toAmino(message: QuerySealPairSummaryResponse, useInterfaces: boolean = true): QuerySealPairSummaryResponseAmino {
    const obj: any = {};
    obj.reservable_volume = message.reservableVolume === "" ? undefined : message.reservableVolume;
    return obj;
  },
  fromAminoMsg(object: QuerySealPairSummaryResponseAminoMsg): QuerySealPairSummaryResponse {
    return QuerySealPairSummaryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySealPairSummaryResponseProtoMsg, useInterfaces: boolean = true): QuerySealPairSummaryResponse {
    return QuerySealPairSummaryResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySealPairSummaryResponse): Uint8Array {
    return QuerySealPairSummaryResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySealPairSummaryResponse): QuerySealPairSummaryResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.seal.QuerySealPairSummaryResponse",
      value: QuerySealPairSummaryResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySealPairSummaryResponse.typeUrl, QuerySealPairSummaryResponse);
function createBaseQuerySealPairPriceRequest(): QuerySealPairPriceRequest {
  return {
    tokenIn: "",
    tokenOut: ""
  };
}
export const QuerySealPairPriceRequest = {
  typeUrl: "/pryzmatics.server.seal.QuerySealPairPriceRequest",
  is(o: any): o is QuerySealPairPriceRequest {
    return o && (o.$typeUrl === QuerySealPairPriceRequest.typeUrl || typeof o.tokenIn === "string" && typeof o.tokenOut === "string");
  },
  isSDK(o: any): o is QuerySealPairPriceRequestSDKType {
    return o && (o.$typeUrl === QuerySealPairPriceRequest.typeUrl || typeof o.token_in === "string" && typeof o.token_out === "string");
  },
  isAmino(o: any): o is QuerySealPairPriceRequestAmino {
    return o && (o.$typeUrl === QuerySealPairPriceRequest.typeUrl || typeof o.token_in === "string" && typeof o.token_out === "string");
  },
  encode(message: QuerySealPairPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenIn !== "") {
      writer.uint32(10).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(18).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySealPairPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySealPairPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenIn = reader.string();
          break;
        case 2:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySealPairPriceRequest {
    return {
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : ""
    };
  },
  toJSON(message: QuerySealPairPriceRequest): unknown {
    const obj: any = {};
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    return obj;
  },
  fromPartial(object: Partial<QuerySealPairPriceRequest>): QuerySealPairPriceRequest {
    const message = createBaseQuerySealPairPriceRequest();
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  },
  fromAmino(object: QuerySealPairPriceRequestAmino): QuerySealPairPriceRequest {
    const message = createBaseQuerySealPairPriceRequest();
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    return message;
  },
  toAmino(message: QuerySealPairPriceRequest, useInterfaces: boolean = true): QuerySealPairPriceRequestAmino {
    const obj: any = {};
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    return obj;
  },
  fromAminoMsg(object: QuerySealPairPriceRequestAminoMsg): QuerySealPairPriceRequest {
    return QuerySealPairPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySealPairPriceRequestProtoMsg, useInterfaces: boolean = true): QuerySealPairPriceRequest {
    return QuerySealPairPriceRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySealPairPriceRequest): Uint8Array {
    return QuerySealPairPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySealPairPriceRequest): QuerySealPairPriceRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.seal.QuerySealPairPriceRequest",
      value: QuerySealPairPriceRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySealPairPriceRequest.typeUrl, QuerySealPairPriceRequest);
function createBaseQuerySealPairPriceResponse(): QuerySealPairPriceResponse {
  return {
    tokenInPrice: undefined,
    tokenOutPrice: undefined,
    tokenInPriceInTermsOfTokenOut: undefined,
    tokenOutPriceInTermsOfTokenIn: undefined
  };
}
export const QuerySealPairPriceResponse = {
  typeUrl: "/pryzmatics.server.seal.QuerySealPairPriceResponse",
  is(o: any): o is QuerySealPairPriceResponse {
    return o && o.$typeUrl === QuerySealPairPriceResponse.typeUrl;
  },
  isSDK(o: any): o is QuerySealPairPriceResponseSDKType {
    return o && o.$typeUrl === QuerySealPairPriceResponse.typeUrl;
  },
  isAmino(o: any): o is QuerySealPairPriceResponseAmino {
    return o && o.$typeUrl === QuerySealPairPriceResponse.typeUrl;
  },
  encode(message: QuerySealPairPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenInPrice !== undefined) {
      writer.uint32(10).string(Decimal.fromUserInput(message.tokenInPrice, 18).atomics);
    }
    if (message.tokenOutPrice !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.tokenOutPrice, 18).atomics);
    }
    if (message.tokenInPriceInTermsOfTokenOut !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.tokenInPriceInTermsOfTokenOut, 18).atomics);
    }
    if (message.tokenOutPriceInTermsOfTokenIn !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.tokenOutPriceInTermsOfTokenIn, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySealPairPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySealPairPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenInPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.tokenOutPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.tokenInPriceInTermsOfTokenOut = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.tokenOutPriceInTermsOfTokenIn = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySealPairPriceResponse {
    return {
      tokenInPrice: isSet(object.tokenInPrice) ? String(object.tokenInPrice) : undefined,
      tokenOutPrice: isSet(object.tokenOutPrice) ? String(object.tokenOutPrice) : undefined,
      tokenInPriceInTermsOfTokenOut: isSet(object.tokenInPriceInTermsOfTokenOut) ? String(object.tokenInPriceInTermsOfTokenOut) : undefined,
      tokenOutPriceInTermsOfTokenIn: isSet(object.tokenOutPriceInTermsOfTokenIn) ? String(object.tokenOutPriceInTermsOfTokenIn) : undefined
    };
  },
  toJSON(message: QuerySealPairPriceResponse): unknown {
    const obj: any = {};
    message.tokenInPrice !== undefined && (obj.tokenInPrice = message.tokenInPrice);
    message.tokenOutPrice !== undefined && (obj.tokenOutPrice = message.tokenOutPrice);
    message.tokenInPriceInTermsOfTokenOut !== undefined && (obj.tokenInPriceInTermsOfTokenOut = message.tokenInPriceInTermsOfTokenOut);
    message.tokenOutPriceInTermsOfTokenIn !== undefined && (obj.tokenOutPriceInTermsOfTokenIn = message.tokenOutPriceInTermsOfTokenIn);
    return obj;
  },
  fromPartial(object: Partial<QuerySealPairPriceResponse>): QuerySealPairPriceResponse {
    const message = createBaseQuerySealPairPriceResponse();
    message.tokenInPrice = object.tokenInPrice ?? undefined;
    message.tokenOutPrice = object.tokenOutPrice ?? undefined;
    message.tokenInPriceInTermsOfTokenOut = object.tokenInPriceInTermsOfTokenOut ?? undefined;
    message.tokenOutPriceInTermsOfTokenIn = object.tokenOutPriceInTermsOfTokenIn ?? undefined;
    return message;
  },
  fromAmino(object: QuerySealPairPriceResponseAmino): QuerySealPairPriceResponse {
    const message = createBaseQuerySealPairPriceResponse();
    if (object.token_in_price !== undefined && object.token_in_price !== null) {
      message.tokenInPrice = object.token_in_price;
    }
    if (object.token_out_price !== undefined && object.token_out_price !== null) {
      message.tokenOutPrice = object.token_out_price;
    }
    if (object.token_in_price_in_terms_of_token_out !== undefined && object.token_in_price_in_terms_of_token_out !== null) {
      message.tokenInPriceInTermsOfTokenOut = object.token_in_price_in_terms_of_token_out;
    }
    if (object.token_out_price_in_terms_of_token_in !== undefined && object.token_out_price_in_terms_of_token_in !== null) {
      message.tokenOutPriceInTermsOfTokenIn = object.token_out_price_in_terms_of_token_in;
    }
    return message;
  },
  toAmino(message: QuerySealPairPriceResponse, useInterfaces: boolean = true): QuerySealPairPriceResponseAmino {
    const obj: any = {};
    obj.token_in_price = padDecimal(message.tokenInPrice) === null ? undefined : padDecimal(message.tokenInPrice);
    obj.token_out_price = padDecimal(message.tokenOutPrice) === null ? undefined : padDecimal(message.tokenOutPrice);
    obj.token_in_price_in_terms_of_token_out = padDecimal(message.tokenInPriceInTermsOfTokenOut) === null ? undefined : padDecimal(message.tokenInPriceInTermsOfTokenOut);
    obj.token_out_price_in_terms_of_token_in = padDecimal(message.tokenOutPriceInTermsOfTokenIn) === null ? undefined : padDecimal(message.tokenOutPriceInTermsOfTokenIn);
    return obj;
  },
  fromAminoMsg(object: QuerySealPairPriceResponseAminoMsg): QuerySealPairPriceResponse {
    return QuerySealPairPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySealPairPriceResponseProtoMsg, useInterfaces: boolean = true): QuerySealPairPriceResponse {
    return QuerySealPairPriceResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySealPairPriceResponse): Uint8Array {
    return QuerySealPairPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySealPairPriceResponse): QuerySealPairPriceResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.seal.QuerySealPairPriceResponse",
      value: QuerySealPairPriceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySealPairPriceResponse.typeUrl, QuerySealPairPriceResponse);