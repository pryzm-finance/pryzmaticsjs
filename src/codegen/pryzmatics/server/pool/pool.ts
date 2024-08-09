import { ExtendedPool, ExtendedPoolAmino, ExtendedPoolSDKType } from "../../pool/extended_pool";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export enum ZeroImpactJoinMethod {
  ZIJ_YAMM = 0,
  ZIJ_ASSET_TO_YAMM = 1,
  ZIJ_ASSET_TO_NESTED = 2,
  UNRECOGNIZED = -1,
}
export const ZeroImpactJoinMethodSDKType = ZeroImpactJoinMethod;
export const ZeroImpactJoinMethodAmino = ZeroImpactJoinMethod;
export function zeroImpactJoinMethodFromJSON(object: any): ZeroImpactJoinMethod {
  switch (object) {
    case 0:
    case "ZIJ_YAMM":
      return ZeroImpactJoinMethod.ZIJ_YAMM;
    case 1:
    case "ZIJ_ASSET_TO_YAMM":
      return ZeroImpactJoinMethod.ZIJ_ASSET_TO_YAMM;
    case 2:
    case "ZIJ_ASSET_TO_NESTED":
      return ZeroImpactJoinMethod.ZIJ_ASSET_TO_NESTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ZeroImpactJoinMethod.UNRECOGNIZED;
  }
}
export function zeroImpactJoinMethodToJSON(object: ZeroImpactJoinMethod): string {
  switch (object) {
    case ZeroImpactJoinMethod.ZIJ_YAMM:
      return "ZIJ_YAMM";
    case ZeroImpactJoinMethod.ZIJ_ASSET_TO_YAMM:
      return "ZIJ_ASSET_TO_YAMM";
    case ZeroImpactJoinMethod.ZIJ_ASSET_TO_NESTED:
      return "ZIJ_ASSET_TO_NESTED";
    case ZeroImpactJoinMethod.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface ZeroImpactJoinAssetParameters {
  hostChainId: string;
  transferChannel: string;
}
export interface ZeroImpactJoinAssetParametersProtoMsg {
  typeUrl: "/pryzmatics.server.pool.ZeroImpactJoinAssetParameters";
  value: Uint8Array;
}
export interface ZeroImpactJoinAssetParametersAmino {
  host_chain_id?: string;
  transfer_channel?: string;
}
export interface ZeroImpactJoinAssetParametersAminoMsg {
  type: "/pryzmatics.server.pool.ZeroImpactJoinAssetParameters";
  value: ZeroImpactJoinAssetParametersAmino;
}
export interface ZeroImpactJoinAssetParametersSDKType {
  host_chain_id: string;
  transfer_channel: string;
}
export interface ZeroImpactJoinCapability {
  denom: string;
  method: ZeroImpactJoinMethod;
  provider: string;
  /** this property will be nil for ZeroImpactJoinYAMM, and for contract assets */
  zijAssetParams?: ZeroImpactJoinAssetParameters;
}
export interface ZeroImpactJoinCapabilityProtoMsg {
  typeUrl: "/pryzmatics.server.pool.ZeroImpactJoinCapability";
  value: Uint8Array;
}
export interface ZeroImpactJoinCapabilityAmino {
  denom?: string;
  method?: ZeroImpactJoinMethod;
  provider?: string;
  /** this property will be nil for ZeroImpactJoinYAMM, and for contract assets */
  zij_asset_params?: ZeroImpactJoinAssetParametersAmino;
}
export interface ZeroImpactJoinCapabilityAminoMsg {
  type: "/pryzmatics.server.pool.ZeroImpactJoinCapability";
  value: ZeroImpactJoinCapabilityAmino;
}
export interface ZeroImpactJoinCapabilitySDKType {
  denom: string;
  method: ZeroImpactJoinMethod;
  provider: string;
  zij_asset_params?: ZeroImpactJoinAssetParametersSDKType;
}
export interface QueryPoolRequest {
  poolId: bigint;
}
export interface QueryPoolRequestProtoMsg {
  typeUrl: "/pryzmatics.server.pool.QueryPoolRequest";
  value: Uint8Array;
}
export interface QueryPoolRequestAmino {
  pool_id?: string;
}
export interface QueryPoolRequestAminoMsg {
  type: "/pryzmatics.server.pool.QueryPoolRequest";
  value: QueryPoolRequestAmino;
}
export interface QueryPoolRequestSDKType {
  pool_id: bigint;
}
export interface QueryPoolResponse {
  pool: ExtendedPool;
  zeroImpactJoinCapabilities: ZeroImpactJoinCapability[];
}
export interface QueryPoolResponseProtoMsg {
  typeUrl: "/pryzmatics.server.pool.QueryPoolResponse";
  value: Uint8Array;
}
export interface QueryPoolResponseAmino {
  pool?: ExtendedPoolAmino;
  zero_impact_join_capabilities?: ZeroImpactJoinCapabilityAmino[];
}
export interface QueryPoolResponseAminoMsg {
  type: "/pryzmatics.server.pool.QueryPoolResponse";
  value: QueryPoolResponseAmino;
}
export interface QueryPoolResponseSDKType {
  pool: ExtendedPoolSDKType;
  zero_impact_join_capabilities: ZeroImpactJoinCapabilitySDKType[];
}
export interface QueryPoolsRequest {
  pagination?: PageRequest;
}
export interface QueryPoolsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.pool.QueryPoolsRequest";
  value: Uint8Array;
}
export interface QueryPoolsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryPoolsRequestAminoMsg {
  type: "/pryzmatics.server.pool.QueryPoolsRequest";
  value: QueryPoolsRequestAmino;
}
export interface QueryPoolsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryPoolsResponse {
  pools: ExtendedPool[];
  pagination?: PageResponse;
}
export interface QueryPoolsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.pool.QueryPoolsResponse";
  value: Uint8Array;
}
export interface QueryPoolsResponseAmino {
  pools?: ExtendedPoolAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryPoolsResponseAminoMsg {
  type: "/pryzmatics.server.pool.QueryPoolsResponse";
  value: QueryPoolsResponseAmino;
}
export interface QueryPoolsResponseSDKType {
  pools: ExtendedPoolSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseZeroImpactJoinAssetParameters(): ZeroImpactJoinAssetParameters {
  return {
    hostChainId: "",
    transferChannel: ""
  };
}
export const ZeroImpactJoinAssetParameters = {
  typeUrl: "/pryzmatics.server.pool.ZeroImpactJoinAssetParameters",
  is(o: any): o is ZeroImpactJoinAssetParameters {
    return o && (o.$typeUrl === ZeroImpactJoinAssetParameters.typeUrl || typeof o.hostChainId === "string" && typeof o.transferChannel === "string");
  },
  isSDK(o: any): o is ZeroImpactJoinAssetParametersSDKType {
    return o && (o.$typeUrl === ZeroImpactJoinAssetParameters.typeUrl || typeof o.host_chain_id === "string" && typeof o.transfer_channel === "string");
  },
  isAmino(o: any): o is ZeroImpactJoinAssetParametersAmino {
    return o && (o.$typeUrl === ZeroImpactJoinAssetParameters.typeUrl || typeof o.host_chain_id === "string" && typeof o.transfer_channel === "string");
  },
  encode(message: ZeroImpactJoinAssetParameters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChainId !== "") {
      writer.uint32(10).string(message.hostChainId);
    }
    if (message.transferChannel !== "") {
      writer.uint32(18).string(message.transferChannel);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ZeroImpactJoinAssetParameters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseZeroImpactJoinAssetParameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChainId = reader.string();
          break;
        case 2:
          message.transferChannel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ZeroImpactJoinAssetParameters {
    return {
      hostChainId: isSet(object.hostChainId) ? String(object.hostChainId) : "",
      transferChannel: isSet(object.transferChannel) ? String(object.transferChannel) : ""
    };
  },
  toJSON(message: ZeroImpactJoinAssetParameters): unknown {
    const obj: any = {};
    message.hostChainId !== undefined && (obj.hostChainId = message.hostChainId);
    message.transferChannel !== undefined && (obj.transferChannel = message.transferChannel);
    return obj;
  },
  fromPartial(object: Partial<ZeroImpactJoinAssetParameters>): ZeroImpactJoinAssetParameters {
    const message = createBaseZeroImpactJoinAssetParameters();
    message.hostChainId = object.hostChainId ?? "";
    message.transferChannel = object.transferChannel ?? "";
    return message;
  },
  fromAmino(object: ZeroImpactJoinAssetParametersAmino): ZeroImpactJoinAssetParameters {
    const message = createBaseZeroImpactJoinAssetParameters();
    if (object.host_chain_id !== undefined && object.host_chain_id !== null) {
      message.hostChainId = object.host_chain_id;
    }
    if (object.transfer_channel !== undefined && object.transfer_channel !== null) {
      message.transferChannel = object.transfer_channel;
    }
    return message;
  },
  toAmino(message: ZeroImpactJoinAssetParameters, useInterfaces: boolean = true): ZeroImpactJoinAssetParametersAmino {
    const obj: any = {};
    obj.host_chain_id = message.hostChainId === "" ? undefined : message.hostChainId;
    obj.transfer_channel = message.transferChannel === "" ? undefined : message.transferChannel;
    return obj;
  },
  fromAminoMsg(object: ZeroImpactJoinAssetParametersAminoMsg): ZeroImpactJoinAssetParameters {
    return ZeroImpactJoinAssetParameters.fromAmino(object.value);
  },
  fromProtoMsg(message: ZeroImpactJoinAssetParametersProtoMsg, useInterfaces: boolean = true): ZeroImpactJoinAssetParameters {
    return ZeroImpactJoinAssetParameters.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ZeroImpactJoinAssetParameters): Uint8Array {
    return ZeroImpactJoinAssetParameters.encode(message).finish();
  },
  toProtoMsg(message: ZeroImpactJoinAssetParameters): ZeroImpactJoinAssetParametersProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pool.ZeroImpactJoinAssetParameters",
      value: ZeroImpactJoinAssetParameters.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ZeroImpactJoinAssetParameters.typeUrl, ZeroImpactJoinAssetParameters);
function createBaseZeroImpactJoinCapability(): ZeroImpactJoinCapability {
  return {
    denom: "",
    method: 0,
    provider: "",
    zijAssetParams: undefined
  };
}
export const ZeroImpactJoinCapability = {
  typeUrl: "/pryzmatics.server.pool.ZeroImpactJoinCapability",
  is(o: any): o is ZeroImpactJoinCapability {
    return o && (o.$typeUrl === ZeroImpactJoinCapability.typeUrl || typeof o.denom === "string" && isSet(o.method) && typeof o.provider === "string");
  },
  isSDK(o: any): o is ZeroImpactJoinCapabilitySDKType {
    return o && (o.$typeUrl === ZeroImpactJoinCapability.typeUrl || typeof o.denom === "string" && isSet(o.method) && typeof o.provider === "string");
  },
  isAmino(o: any): o is ZeroImpactJoinCapabilityAmino {
    return o && (o.$typeUrl === ZeroImpactJoinCapability.typeUrl || typeof o.denom === "string" && isSet(o.method) && typeof o.provider === "string");
  },
  encode(message: ZeroImpactJoinCapability, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    if (message.zijAssetParams !== undefined) {
      ZeroImpactJoinAssetParameters.encode(message.zijAssetParams, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ZeroImpactJoinCapability {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseZeroImpactJoinCapability();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.method = (reader.int32() as any);
          break;
        case 3:
          message.provider = reader.string();
          break;
        case 4:
          message.zijAssetParams = ZeroImpactJoinAssetParameters.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ZeroImpactJoinCapability {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      method: isSet(object.method) ? zeroImpactJoinMethodFromJSON(object.method) : -1,
      provider: isSet(object.provider) ? String(object.provider) : "",
      zijAssetParams: isSet(object.zijAssetParams) ? ZeroImpactJoinAssetParameters.fromJSON(object.zijAssetParams) : undefined
    };
  },
  toJSON(message: ZeroImpactJoinCapability): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.method !== undefined && (obj.method = zeroImpactJoinMethodToJSON(message.method));
    message.provider !== undefined && (obj.provider = message.provider);
    message.zijAssetParams !== undefined && (obj.zijAssetParams = message.zijAssetParams ? ZeroImpactJoinAssetParameters.toJSON(message.zijAssetParams) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ZeroImpactJoinCapability>): ZeroImpactJoinCapability {
    const message = createBaseZeroImpactJoinCapability();
    message.denom = object.denom ?? "";
    message.method = object.method ?? 0;
    message.provider = object.provider ?? "";
    message.zijAssetParams = object.zijAssetParams !== undefined && object.zijAssetParams !== null ? ZeroImpactJoinAssetParameters.fromPartial(object.zijAssetParams) : undefined;
    return message;
  },
  fromAmino(object: ZeroImpactJoinCapabilityAmino): ZeroImpactJoinCapability {
    const message = createBaseZeroImpactJoinCapability();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.method !== undefined && object.method !== null) {
      message.method = object.method;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.zij_asset_params !== undefined && object.zij_asset_params !== null) {
      message.zijAssetParams = ZeroImpactJoinAssetParameters.fromAmino(object.zij_asset_params);
    }
    return message;
  },
  toAmino(message: ZeroImpactJoinCapability, useInterfaces: boolean = true): ZeroImpactJoinCapabilityAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.method = message.method === 0 ? undefined : message.method;
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.zij_asset_params = message.zijAssetParams ? ZeroImpactJoinAssetParameters.toAmino(message.zijAssetParams, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: ZeroImpactJoinCapabilityAminoMsg): ZeroImpactJoinCapability {
    return ZeroImpactJoinCapability.fromAmino(object.value);
  },
  fromProtoMsg(message: ZeroImpactJoinCapabilityProtoMsg, useInterfaces: boolean = true): ZeroImpactJoinCapability {
    return ZeroImpactJoinCapability.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ZeroImpactJoinCapability): Uint8Array {
    return ZeroImpactJoinCapability.encode(message).finish();
  },
  toProtoMsg(message: ZeroImpactJoinCapability): ZeroImpactJoinCapabilityProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pool.ZeroImpactJoinCapability",
      value: ZeroImpactJoinCapability.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ZeroImpactJoinCapability.typeUrl, ZeroImpactJoinCapability);
function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryPoolRequest = {
  typeUrl: "/pryzmatics.server.pool.QueryPoolRequest",
  is(o: any): o is QueryPoolRequest {
    return o && (o.$typeUrl === QueryPoolRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is QueryPoolRequestSDKType {
    return o && (o.$typeUrl === QueryPoolRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is QueryPoolRequestAmino {
    return o && (o.$typeUrl === QueryPoolRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: QueryPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryPoolRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryPoolRequest>): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPoolRequestAmino): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QueryPoolRequest, useInterfaces: boolean = true): QueryPoolRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolRequestAminoMsg): QueryPoolRequest {
    return QueryPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolRequestProtoMsg, useInterfaces: boolean = true): QueryPoolRequest {
    return QueryPoolRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolRequest): Uint8Array {
    return QueryPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolRequest): QueryPoolRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pool.QueryPoolRequest",
      value: QueryPoolRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolRequest.typeUrl, QueryPoolRequest);
function createBaseQueryPoolResponse(): QueryPoolResponse {
  return {
    pool: ExtendedPool.fromPartial({}),
    zeroImpactJoinCapabilities: []
  };
}
export const QueryPoolResponse = {
  typeUrl: "/pryzmatics.server.pool.QueryPoolResponse",
  is(o: any): o is QueryPoolResponse {
    return o && (o.$typeUrl === QueryPoolResponse.typeUrl || ExtendedPool.is(o.pool) && Array.isArray(o.zeroImpactJoinCapabilities) && (!o.zeroImpactJoinCapabilities.length || ZeroImpactJoinCapability.is(o.zeroImpactJoinCapabilities[0])));
  },
  isSDK(o: any): o is QueryPoolResponseSDKType {
    return o && (o.$typeUrl === QueryPoolResponse.typeUrl || ExtendedPool.isSDK(o.pool) && Array.isArray(o.zero_impact_join_capabilities) && (!o.zero_impact_join_capabilities.length || ZeroImpactJoinCapability.isSDK(o.zero_impact_join_capabilities[0])));
  },
  isAmino(o: any): o is QueryPoolResponseAmino {
    return o && (o.$typeUrl === QueryPoolResponse.typeUrl || ExtendedPool.isAmino(o.pool) && Array.isArray(o.zero_impact_join_capabilities) && (!o.zero_impact_join_capabilities.length || ZeroImpactJoinCapability.isAmino(o.zero_impact_join_capabilities[0])));
  },
  encode(message: QueryPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      ExtendedPool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.zeroImpactJoinCapabilities) {
      ZeroImpactJoinCapability.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = ExtendedPool.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.zeroImpactJoinCapabilities.push(ZeroImpactJoinCapability.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolResponse {
    return {
      pool: isSet(object.pool) ? ExtendedPool.fromJSON(object.pool) : undefined,
      zeroImpactJoinCapabilities: Array.isArray(object?.zeroImpactJoinCapabilities) ? object.zeroImpactJoinCapabilities.map((e: any) => ZeroImpactJoinCapability.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? ExtendedPool.toJSON(message.pool) : undefined);
    if (message.zeroImpactJoinCapabilities) {
      obj.zeroImpactJoinCapabilities = message.zeroImpactJoinCapabilities.map(e => e ? ZeroImpactJoinCapability.toJSON(e) : undefined);
    } else {
      obj.zeroImpactJoinCapabilities = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? ExtendedPool.fromPartial(object.pool) : undefined;
    message.zeroImpactJoinCapabilities = object.zeroImpactJoinCapabilities?.map(e => ZeroImpactJoinCapability.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = ExtendedPool.fromAmino(object.pool);
    }
    message.zeroImpactJoinCapabilities = object.zero_impact_join_capabilities?.map(e => ZeroImpactJoinCapability.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPoolResponse, useInterfaces: boolean = true): QueryPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? ExtendedPool.toAmino(message.pool, useInterfaces) : undefined;
    if (message.zeroImpactJoinCapabilities) {
      obj.zero_impact_join_capabilities = message.zeroImpactJoinCapabilities.map(e => e ? ZeroImpactJoinCapability.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.zero_impact_join_capabilities = message.zeroImpactJoinCapabilities;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPoolResponseAminoMsg): QueryPoolResponse {
    return QueryPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolResponseProtoMsg, useInterfaces: boolean = true): QueryPoolResponse {
    return QueryPoolResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolResponse): Uint8Array {
    return QueryPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolResponse): QueryPoolResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pool.QueryPoolResponse",
      value: QueryPoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolResponse.typeUrl, QueryPoolResponse);
function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return {
    pagination: undefined
  };
}
export const QueryPoolsRequest = {
  typeUrl: "/pryzmatics.server.pool.QueryPoolsRequest",
  is(o: any): o is QueryPoolsRequest {
    return o && o.$typeUrl === QueryPoolsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryPoolsRequestSDKType {
    return o && o.$typeUrl === QueryPoolsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryPoolsRequestAmino {
    return o && o.$typeUrl === QueryPoolsRequest.typeUrl;
  },
  encode(message: QueryPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPoolsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolsRequestAmino): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolsRequest, useInterfaces: boolean = true): QueryPoolsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolsRequestAminoMsg): QueryPoolsRequest {
    return QueryPoolsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolsRequestProtoMsg, useInterfaces: boolean = true): QueryPoolsRequest {
    return QueryPoolsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolsRequest): Uint8Array {
    return QueryPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsRequest): QueryPoolsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pool.QueryPoolsRequest",
      value: QueryPoolsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolsRequest.typeUrl, QueryPoolsRequest);
function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return {
    pools: [],
    pagination: undefined
  };
}
export const QueryPoolsResponse = {
  typeUrl: "/pryzmatics.server.pool.QueryPoolsResponse",
  is(o: any): o is QueryPoolsResponse {
    return o && (o.$typeUrl === QueryPoolsResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || ExtendedPool.is(o.pools[0])));
  },
  isSDK(o: any): o is QueryPoolsResponseSDKType {
    return o && (o.$typeUrl === QueryPoolsResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || ExtendedPool.isSDK(o.pools[0])));
  },
  isAmino(o: any): o is QueryPoolsResponseAmino {
    return o && (o.$typeUrl === QueryPoolsResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || ExtendedPool.isAmino(o.pools[0])));
  },
  encode(message: QueryPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      ExtendedPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(ExtendedPool.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryPoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => ExtendedPool.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPoolsResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? ExtendedPool.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => ExtendedPool.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolsResponseAmino): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => ExtendedPool.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolsResponse, useInterfaces: boolean = true): QueryPoolsResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? ExtendedPool.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.pools = message.pools;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolsResponseAminoMsg): QueryPoolsResponse {
    return QueryPoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolsResponseProtoMsg, useInterfaces: boolean = true): QueryPoolsResponse {
    return QueryPoolsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPoolsResponse): Uint8Array {
    return QueryPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsResponse): QueryPoolsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pool.QueryPoolsResponse",
      value: QueryPoolsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPoolsResponse.typeUrl, QueryPoolsResponse);