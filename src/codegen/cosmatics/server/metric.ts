import { MetricType, Metric, MetricAmino, MetricSDKType, metricTypeFromJSON, metricTypeToJSON } from "../metric";
import { PageRequest, PageRequestAmino, PageRequestSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { isSet } from "../../helpers";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
export interface QueryMetricsRequest {
  metricId: string;
  metricType: MetricType;
  fromBlockHeight?: string;
  toBlockHeight?: string;
  fromTime?: string;
  toTime?: string;
  pagination?: PageRequest;
}
export interface QueryMetricsRequestProtoMsg {
  typeUrl: "/cosmatics.server.QueryMetricsRequest";
  value: Uint8Array;
}
export interface QueryMetricsRequestAmino {
  metric_id?: string;
  metric_type?: MetricType;
  from_block_height?: string;
  to_block_height?: string;
  from_time?: string;
  to_time?: string;
  pagination?: PageRequestAmino;
}
export interface QueryMetricsRequestAminoMsg {
  type: "/cosmatics.server.QueryMetricsRequest";
  value: QueryMetricsRequestAmino;
}
export interface QueryMetricsRequestSDKType {
  metric_id: string;
  metric_type: MetricType;
  from_block_height?: string;
  to_block_height?: string;
  from_time?: string;
  to_time?: string;
  pagination?: PageRequestSDKType;
}
export interface QueryMetricsResponse {
  metrics: Metric[];
}
export interface QueryMetricsResponseProtoMsg {
  typeUrl: "/cosmatics.server.QueryMetricsResponse";
  value: Uint8Array;
}
export interface QueryMetricsResponseAmino {
  metrics?: MetricAmino[];
}
export interface QueryMetricsResponseAminoMsg {
  type: "/cosmatics.server.QueryMetricsResponse";
  value: QueryMetricsResponseAmino;
}
export interface QueryMetricsResponseSDKType {
  metrics: MetricSDKType[];
}
function createBaseQueryMetricsRequest(): QueryMetricsRequest {
  return {
    metricId: "",
    metricType: 0,
    fromBlockHeight: undefined,
    toBlockHeight: undefined,
    fromTime: undefined,
    toTime: undefined,
    pagination: undefined
  };
}
export const QueryMetricsRequest = {
  typeUrl: "/cosmatics.server.QueryMetricsRequest",
  is(o: any): o is QueryMetricsRequest {
    return o && (o.$typeUrl === QueryMetricsRequest.typeUrl || typeof o.metricId === "string" && isSet(o.metricType));
  },
  isSDK(o: any): o is QueryMetricsRequestSDKType {
    return o && (o.$typeUrl === QueryMetricsRequest.typeUrl || typeof o.metric_id === "string" && isSet(o.metric_type));
  },
  isAmino(o: any): o is QueryMetricsRequestAmino {
    return o && (o.$typeUrl === QueryMetricsRequest.typeUrl || typeof o.metric_id === "string" && isSet(o.metric_type));
  },
  encode(message: QueryMetricsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metricId !== "") {
      writer.uint32(10).string(message.metricId);
    }
    if (message.metricType !== 0) {
      writer.uint32(16).int32(message.metricType);
    }
    if (message.fromBlockHeight !== undefined) {
      writer.uint32(26).string(message.fromBlockHeight);
    }
    if (message.toBlockHeight !== undefined) {
      writer.uint32(34).string(message.toBlockHeight);
    }
    if (message.fromTime !== undefined) {
      writer.uint32(42).string(message.fromTime);
    }
    if (message.toTime !== undefined) {
      writer.uint32(50).string(message.toTime);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryMetricsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMetricsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metricId = reader.string();
          break;
        case 2:
          message.metricType = (reader.int32() as any);
          break;
        case 3:
          message.fromBlockHeight = reader.string();
          break;
        case 4:
          message.toBlockHeight = reader.string();
          break;
        case 5:
          message.fromTime = reader.string();
          break;
        case 6:
          message.toTime = reader.string();
          break;
        case 7:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMetricsRequest {
    return {
      metricId: isSet(object.metricId) ? String(object.metricId) : "",
      metricType: isSet(object.metricType) ? metricTypeFromJSON(object.metricType) : -1,
      fromBlockHeight: isSet(object.fromBlockHeight) ? String(object.fromBlockHeight) : undefined,
      toBlockHeight: isSet(object.toBlockHeight) ? String(object.toBlockHeight) : undefined,
      fromTime: isSet(object.fromTime) ? String(object.fromTime) : undefined,
      toTime: isSet(object.toTime) ? String(object.toTime) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryMetricsRequest): unknown {
    const obj: any = {};
    message.metricId !== undefined && (obj.metricId = message.metricId);
    message.metricType !== undefined && (obj.metricType = metricTypeToJSON(message.metricType));
    message.fromBlockHeight !== undefined && (obj.fromBlockHeight = message.fromBlockHeight);
    message.toBlockHeight !== undefined && (obj.toBlockHeight = message.toBlockHeight);
    message.fromTime !== undefined && (obj.fromTime = message.fromTime);
    message.toTime !== undefined && (obj.toTime = message.toTime);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryMetricsRequest>): QueryMetricsRequest {
    const message = createBaseQueryMetricsRequest();
    message.metricId = object.metricId ?? "";
    message.metricType = object.metricType ?? 0;
    message.fromBlockHeight = object.fromBlockHeight ?? undefined;
    message.toBlockHeight = object.toBlockHeight ?? undefined;
    message.fromTime = object.fromTime ?? undefined;
    message.toTime = object.toTime ?? undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMetricsRequestAmino): QueryMetricsRequest {
    const message = createBaseQueryMetricsRequest();
    if (object.metric_id !== undefined && object.metric_id !== null) {
      message.metricId = object.metric_id;
    }
    if (object.metric_type !== undefined && object.metric_type !== null) {
      message.metricType = object.metric_type;
    }
    if (object.from_block_height !== undefined && object.from_block_height !== null) {
      message.fromBlockHeight = object.from_block_height;
    }
    if (object.to_block_height !== undefined && object.to_block_height !== null) {
      message.toBlockHeight = object.to_block_height;
    }
    if (object.from_time !== undefined && object.from_time !== null) {
      message.fromTime = object.from_time;
    }
    if (object.to_time !== undefined && object.to_time !== null) {
      message.toTime = object.to_time;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMetricsRequest, useInterfaces: boolean = true): QueryMetricsRequestAmino {
    const obj: any = {};
    obj.metric_id = message.metricId === "" ? undefined : message.metricId;
    obj.metric_type = message.metricType === 0 ? undefined : message.metricType;
    obj.from_block_height = message.fromBlockHeight === null ? undefined : message.fromBlockHeight;
    obj.to_block_height = message.toBlockHeight === null ? undefined : message.toBlockHeight;
    obj.from_time = message.fromTime === null ? undefined : message.fromTime;
    obj.to_time = message.toTime === null ? undefined : message.toTime;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMetricsRequestAminoMsg): QueryMetricsRequest {
    return QueryMetricsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMetricsRequestProtoMsg, useInterfaces: boolean = true): QueryMetricsRequest {
    return QueryMetricsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryMetricsRequest): Uint8Array {
    return QueryMetricsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMetricsRequest): QueryMetricsRequestProtoMsg {
    return {
      typeUrl: "/cosmatics.server.QueryMetricsRequest",
      value: QueryMetricsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryMetricsRequest.typeUrl, QueryMetricsRequest);
function createBaseQueryMetricsResponse(): QueryMetricsResponse {
  return {
    metrics: []
  };
}
export const QueryMetricsResponse = {
  typeUrl: "/cosmatics.server.QueryMetricsResponse",
  is(o: any): o is QueryMetricsResponse {
    return o && (o.$typeUrl === QueryMetricsResponse.typeUrl || Array.isArray(o.metrics) && (!o.metrics.length || Metric.is(o.metrics[0])));
  },
  isSDK(o: any): o is QueryMetricsResponseSDKType {
    return o && (o.$typeUrl === QueryMetricsResponse.typeUrl || Array.isArray(o.metrics) && (!o.metrics.length || Metric.isSDK(o.metrics[0])));
  },
  isAmino(o: any): o is QueryMetricsResponseAmino {
    return o && (o.$typeUrl === QueryMetricsResponse.typeUrl || Array.isArray(o.metrics) && (!o.metrics.length || Metric.isAmino(o.metrics[0])));
  },
  encode(message: QueryMetricsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.metrics) {
      Metric.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryMetricsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMetricsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metrics.push(Metric.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMetricsResponse {
    return {
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => Metric.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryMetricsResponse): unknown {
    const obj: any = {};
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e ? Metric.toJSON(e) : undefined);
    } else {
      obj.metrics = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryMetricsResponse>): QueryMetricsResponse {
    const message = createBaseQueryMetricsResponse();
    message.metrics = object.metrics?.map(e => Metric.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryMetricsResponseAmino): QueryMetricsResponse {
    const message = createBaseQueryMetricsResponse();
    message.metrics = object.metrics?.map(e => Metric.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryMetricsResponse, useInterfaces: boolean = true): QueryMetricsResponseAmino {
    const obj: any = {};
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e ? Metric.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.metrics = message.metrics;
    }
    return obj;
  },
  fromAminoMsg(object: QueryMetricsResponseAminoMsg): QueryMetricsResponse {
    return QueryMetricsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMetricsResponseProtoMsg, useInterfaces: boolean = true): QueryMetricsResponse {
    return QueryMetricsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryMetricsResponse): Uint8Array {
    return QueryMetricsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMetricsResponse): QueryMetricsResponseProtoMsg {
    return {
      typeUrl: "/cosmatics.server.QueryMetricsResponse",
      value: QueryMetricsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryMetricsResponse.typeUrl, QueryMetricsResponse);