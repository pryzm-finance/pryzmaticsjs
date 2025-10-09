import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../helpers";
import { GlobalDecoderRegistry } from "../registry";
export interface PostProcessFailure {
  blockHeight: bigint;
  postProcessorId: string;
  createdAt: Timestamp;
  reason: string;
}
export interface PostProcessFailureProtoMsg {
  typeUrl: "/cosmatics.PostProcessFailure";
  value: Uint8Array;
}
export interface PostProcessFailureAmino {
  block_height?: string;
  post_processor_id?: string;
  created_at?: string;
  reason?: string;
}
export interface PostProcessFailureAminoMsg {
  type: "/cosmatics.PostProcessFailure";
  value: PostProcessFailureAmino;
}
export interface PostProcessFailureSDKType {
  block_height: bigint;
  post_processor_id: string;
  created_at: TimestampSDKType;
  reason: string;
}
function createBasePostProcessFailure(): PostProcessFailure {
  return {
    blockHeight: BigInt(0),
    postProcessorId: "",
    createdAt: Timestamp.fromPartial({}),
    reason: ""
  };
}
export const PostProcessFailure = {
  typeUrl: "/cosmatics.PostProcessFailure",
  is(o: any): o is PostProcessFailure {
    return o && (o.$typeUrl === PostProcessFailure.typeUrl || typeof o.blockHeight === "bigint" && typeof o.postProcessorId === "string" && Timestamp.is(o.createdAt) && typeof o.reason === "string");
  },
  isSDK(o: any): o is PostProcessFailureSDKType {
    return o && (o.$typeUrl === PostProcessFailure.typeUrl || typeof o.block_height === "bigint" && typeof o.post_processor_id === "string" && Timestamp.isSDK(o.created_at) && typeof o.reason === "string");
  },
  isAmino(o: any): o is PostProcessFailureAmino {
    return o && (o.$typeUrl === PostProcessFailure.typeUrl || typeof o.block_height === "bigint" && typeof o.post_processor_id === "string" && Timestamp.isAmino(o.created_at) && typeof o.reason === "string");
  },
  encode(message: PostProcessFailure, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    if (message.postProcessorId !== "") {
      writer.uint32(18).string(message.postProcessorId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(26).fork()).ldelim();
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PostProcessFailure {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostProcessFailure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.postProcessorId = reader.string();
          break;
        case 3:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PostProcessFailure {
    return {
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      postProcessorId: isSet(object.postProcessorId) ? String(object.postProcessorId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      reason: isSet(object.reason) ? String(object.reason) : ""
    };
  },
  toJSON(message: PostProcessFailure): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    message.postProcessorId !== undefined && (obj.postProcessorId = message.postProcessorId);
    message.createdAt !== undefined && (obj.createdAt = fromTimestamp(message.createdAt).toISOString());
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },
  fromPartial(object: Partial<PostProcessFailure>): PostProcessFailure {
    const message = createBasePostProcessFailure();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.postProcessorId = object.postProcessorId ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Timestamp.fromPartial(object.createdAt) : undefined;
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: PostProcessFailureAmino): PostProcessFailure {
    const message = createBasePostProcessFailure();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.post_processor_id !== undefined && object.post_processor_id !== null) {
      message.postProcessorId = object.post_processor_id;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = Timestamp.fromAmino(object.created_at);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: PostProcessFailure, useInterfaces: boolean = true): PostProcessFailureAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.post_processor_id = message.postProcessorId === "" ? undefined : message.postProcessorId;
    obj.created_at = message.createdAt ? Timestamp.toAmino(message.createdAt, useInterfaces) : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: PostProcessFailureAminoMsg): PostProcessFailure {
    return PostProcessFailure.fromAmino(object.value);
  },
  fromProtoMsg(message: PostProcessFailureProtoMsg, useInterfaces: boolean = true): PostProcessFailure {
    return PostProcessFailure.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PostProcessFailure): Uint8Array {
    return PostProcessFailure.encode(message).finish();
  },
  toProtoMsg(message: PostProcessFailure): PostProcessFailureProtoMsg {
    return {
      typeUrl: "/cosmatics.PostProcessFailure",
      value: PostProcessFailure.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PostProcessFailure.typeUrl, PostProcessFailure);