import { PostProcessFailure, PostProcessFailureAmino, PostProcessFailureSDKType } from "../post_process_failure";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface QueryPostProcessFailuresRequest {
  postProcessorId: string;
  fromBlockHeight?: string;
  toBlockHeight?: string;
  fromTime?: string;
  toTime?: string;
}
export interface QueryPostProcessFailuresRequestProtoMsg {
  typeUrl: "/cosmatics.server.QueryPostProcessFailuresRequest";
  value: Uint8Array;
}
export interface QueryPostProcessFailuresRequestAmino {
  post_processor_id?: string;
  from_block_height?: string;
  to_block_height?: string;
  from_time?: string;
  to_time?: string;
}
export interface QueryPostProcessFailuresRequestAminoMsg {
  type: "/cosmatics.server.QueryPostProcessFailuresRequest";
  value: QueryPostProcessFailuresRequestAmino;
}
export interface QueryPostProcessFailuresRequestSDKType {
  post_processor_id: string;
  from_block_height?: string;
  to_block_height?: string;
  from_time?: string;
  to_time?: string;
}
export interface QueryPostProcessFailuresResponse {
  fromBlockHeight?: string;
  toBlockHeight?: string;
  fromTime?: string;
  toTime?: string;
  failures: PostProcessFailure[];
}
export interface QueryPostProcessFailuresResponseProtoMsg {
  typeUrl: "/cosmatics.server.QueryPostProcessFailuresResponse";
  value: Uint8Array;
}
export interface QueryPostProcessFailuresResponseAmino {
  from_block_height?: string;
  to_block_height?: string;
  from_time?: string;
  to_time?: string;
  failures?: PostProcessFailureAmino[];
}
export interface QueryPostProcessFailuresResponseAminoMsg {
  type: "/cosmatics.server.QueryPostProcessFailuresResponse";
  value: QueryPostProcessFailuresResponseAmino;
}
export interface QueryPostProcessFailuresResponseSDKType {
  from_block_height?: string;
  to_block_height?: string;
  from_time?: string;
  to_time?: string;
  failures: PostProcessFailureSDKType[];
}
function createBaseQueryPostProcessFailuresRequest(): QueryPostProcessFailuresRequest {
  return {
    postProcessorId: "",
    fromBlockHeight: undefined,
    toBlockHeight: undefined,
    fromTime: undefined,
    toTime: undefined
  };
}
export const QueryPostProcessFailuresRequest = {
  typeUrl: "/cosmatics.server.QueryPostProcessFailuresRequest",
  is(o: any): o is QueryPostProcessFailuresRequest {
    return o && (o.$typeUrl === QueryPostProcessFailuresRequest.typeUrl || typeof o.postProcessorId === "string");
  },
  isSDK(o: any): o is QueryPostProcessFailuresRequestSDKType {
    return o && (o.$typeUrl === QueryPostProcessFailuresRequest.typeUrl || typeof o.post_processor_id === "string");
  },
  isAmino(o: any): o is QueryPostProcessFailuresRequestAmino {
    return o && (o.$typeUrl === QueryPostProcessFailuresRequest.typeUrl || typeof o.post_processor_id === "string");
  },
  encode(message: QueryPostProcessFailuresRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.postProcessorId !== "") {
      writer.uint32(10).string(message.postProcessorId);
    }
    if (message.fromBlockHeight !== undefined) {
      writer.uint32(18).string(message.fromBlockHeight);
    }
    if (message.toBlockHeight !== undefined) {
      writer.uint32(26).string(message.toBlockHeight);
    }
    if (message.fromTime !== undefined) {
      writer.uint32(34).string(message.fromTime);
    }
    if (message.toTime !== undefined) {
      writer.uint32(42).string(message.toTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPostProcessFailuresRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostProcessFailuresRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postProcessorId = reader.string();
          break;
        case 2:
          message.fromBlockHeight = reader.string();
          break;
        case 3:
          message.toBlockHeight = reader.string();
          break;
        case 4:
          message.fromTime = reader.string();
          break;
        case 5:
          message.toTime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPostProcessFailuresRequest {
    return {
      postProcessorId: isSet(object.postProcessorId) ? String(object.postProcessorId) : "",
      fromBlockHeight: isSet(object.fromBlockHeight) ? String(object.fromBlockHeight) : undefined,
      toBlockHeight: isSet(object.toBlockHeight) ? String(object.toBlockHeight) : undefined,
      fromTime: isSet(object.fromTime) ? String(object.fromTime) : undefined,
      toTime: isSet(object.toTime) ? String(object.toTime) : undefined
    };
  },
  toJSON(message: QueryPostProcessFailuresRequest): unknown {
    const obj: any = {};
    message.postProcessorId !== undefined && (obj.postProcessorId = message.postProcessorId);
    message.fromBlockHeight !== undefined && (obj.fromBlockHeight = message.fromBlockHeight);
    message.toBlockHeight !== undefined && (obj.toBlockHeight = message.toBlockHeight);
    message.fromTime !== undefined && (obj.fromTime = message.fromTime);
    message.toTime !== undefined && (obj.toTime = message.toTime);
    return obj;
  },
  fromPartial(object: Partial<QueryPostProcessFailuresRequest>): QueryPostProcessFailuresRequest {
    const message = createBaseQueryPostProcessFailuresRequest();
    message.postProcessorId = object.postProcessorId ?? "";
    message.fromBlockHeight = object.fromBlockHeight ?? undefined;
    message.toBlockHeight = object.toBlockHeight ?? undefined;
    message.fromTime = object.fromTime ?? undefined;
    message.toTime = object.toTime ?? undefined;
    return message;
  },
  fromAmino(object: QueryPostProcessFailuresRequestAmino): QueryPostProcessFailuresRequest {
    const message = createBaseQueryPostProcessFailuresRequest();
    if (object.post_processor_id !== undefined && object.post_processor_id !== null) {
      message.postProcessorId = object.post_processor_id;
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
    return message;
  },
  toAmino(message: QueryPostProcessFailuresRequest, useInterfaces: boolean = true): QueryPostProcessFailuresRequestAmino {
    const obj: any = {};
    obj.post_processor_id = message.postProcessorId === "" ? undefined : message.postProcessorId;
    obj.from_block_height = message.fromBlockHeight === null ? undefined : message.fromBlockHeight;
    obj.to_block_height = message.toBlockHeight === null ? undefined : message.toBlockHeight;
    obj.from_time = message.fromTime === null ? undefined : message.fromTime;
    obj.to_time = message.toTime === null ? undefined : message.toTime;
    return obj;
  },
  fromAminoMsg(object: QueryPostProcessFailuresRequestAminoMsg): QueryPostProcessFailuresRequest {
    return QueryPostProcessFailuresRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPostProcessFailuresRequestProtoMsg, useInterfaces: boolean = true): QueryPostProcessFailuresRequest {
    return QueryPostProcessFailuresRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPostProcessFailuresRequest): Uint8Array {
    return QueryPostProcessFailuresRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPostProcessFailuresRequest): QueryPostProcessFailuresRequestProtoMsg {
    return {
      typeUrl: "/cosmatics.server.QueryPostProcessFailuresRequest",
      value: QueryPostProcessFailuresRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPostProcessFailuresRequest.typeUrl, QueryPostProcessFailuresRequest);
function createBaseQueryPostProcessFailuresResponse(): QueryPostProcessFailuresResponse {
  return {
    fromBlockHeight: undefined,
    toBlockHeight: undefined,
    fromTime: undefined,
    toTime: undefined,
    failures: []
  };
}
export const QueryPostProcessFailuresResponse = {
  typeUrl: "/cosmatics.server.QueryPostProcessFailuresResponse",
  is(o: any): o is QueryPostProcessFailuresResponse {
    return o && (o.$typeUrl === QueryPostProcessFailuresResponse.typeUrl || Array.isArray(o.failures) && (!o.failures.length || PostProcessFailure.is(o.failures[0])));
  },
  isSDK(o: any): o is QueryPostProcessFailuresResponseSDKType {
    return o && (o.$typeUrl === QueryPostProcessFailuresResponse.typeUrl || Array.isArray(o.failures) && (!o.failures.length || PostProcessFailure.isSDK(o.failures[0])));
  },
  isAmino(o: any): o is QueryPostProcessFailuresResponseAmino {
    return o && (o.$typeUrl === QueryPostProcessFailuresResponse.typeUrl || Array.isArray(o.failures) && (!o.failures.length || PostProcessFailure.isAmino(o.failures[0])));
  },
  encode(message: QueryPostProcessFailuresResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromBlockHeight !== undefined) {
      writer.uint32(10).string(message.fromBlockHeight);
    }
    if (message.toBlockHeight !== undefined) {
      writer.uint32(18).string(message.toBlockHeight);
    }
    if (message.fromTime !== undefined) {
      writer.uint32(26).string(message.fromTime);
    }
    if (message.toTime !== undefined) {
      writer.uint32(34).string(message.toTime);
    }
    for (const v of message.failures) {
      PostProcessFailure.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPostProcessFailuresResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostProcessFailuresResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromBlockHeight = reader.string();
          break;
        case 2:
          message.toBlockHeight = reader.string();
          break;
        case 3:
          message.fromTime = reader.string();
          break;
        case 4:
          message.toTime = reader.string();
          break;
        case 5:
          message.failures.push(PostProcessFailure.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPostProcessFailuresResponse {
    return {
      fromBlockHeight: isSet(object.fromBlockHeight) ? String(object.fromBlockHeight) : undefined,
      toBlockHeight: isSet(object.toBlockHeight) ? String(object.toBlockHeight) : undefined,
      fromTime: isSet(object.fromTime) ? String(object.fromTime) : undefined,
      toTime: isSet(object.toTime) ? String(object.toTime) : undefined,
      failures: Array.isArray(object?.failures) ? object.failures.map((e: any) => PostProcessFailure.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryPostProcessFailuresResponse): unknown {
    const obj: any = {};
    message.fromBlockHeight !== undefined && (obj.fromBlockHeight = message.fromBlockHeight);
    message.toBlockHeight !== undefined && (obj.toBlockHeight = message.toBlockHeight);
    message.fromTime !== undefined && (obj.fromTime = message.fromTime);
    message.toTime !== undefined && (obj.toTime = message.toTime);
    if (message.failures) {
      obj.failures = message.failures.map(e => e ? PostProcessFailure.toJSON(e) : undefined);
    } else {
      obj.failures = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryPostProcessFailuresResponse>): QueryPostProcessFailuresResponse {
    const message = createBaseQueryPostProcessFailuresResponse();
    message.fromBlockHeight = object.fromBlockHeight ?? undefined;
    message.toBlockHeight = object.toBlockHeight ?? undefined;
    message.fromTime = object.fromTime ?? undefined;
    message.toTime = object.toTime ?? undefined;
    message.failures = object.failures?.map(e => PostProcessFailure.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPostProcessFailuresResponseAmino): QueryPostProcessFailuresResponse {
    const message = createBaseQueryPostProcessFailuresResponse();
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
    message.failures = object.failures?.map(e => PostProcessFailure.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPostProcessFailuresResponse, useInterfaces: boolean = true): QueryPostProcessFailuresResponseAmino {
    const obj: any = {};
    obj.from_block_height = message.fromBlockHeight === null ? undefined : message.fromBlockHeight;
    obj.to_block_height = message.toBlockHeight === null ? undefined : message.toBlockHeight;
    obj.from_time = message.fromTime === null ? undefined : message.fromTime;
    obj.to_time = message.toTime === null ? undefined : message.toTime;
    if (message.failures) {
      obj.failures = message.failures.map(e => e ? PostProcessFailure.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.failures = message.failures;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPostProcessFailuresResponseAminoMsg): QueryPostProcessFailuresResponse {
    return QueryPostProcessFailuresResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPostProcessFailuresResponseProtoMsg, useInterfaces: boolean = true): QueryPostProcessFailuresResponse {
    return QueryPostProcessFailuresResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPostProcessFailuresResponse): Uint8Array {
    return QueryPostProcessFailuresResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPostProcessFailuresResponse): QueryPostProcessFailuresResponseProtoMsg {
    return {
      typeUrl: "/cosmatics.server.QueryPostProcessFailuresResponse",
      value: QueryPostProcessFailuresResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPostProcessFailuresResponse.typeUrl, QueryPostProcessFailuresResponse);