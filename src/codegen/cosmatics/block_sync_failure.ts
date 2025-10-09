import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../helpers";
import { GlobalDecoderRegistry } from "../registry";
export interface BlockSyncFailure {
  blockHeight: bigint;
  createdAt: Timestamp;
  reason: string;
}
export interface BlockSyncFailureProtoMsg {
  typeUrl: "/cosmatics.BlockSyncFailure";
  value: Uint8Array;
}
export interface BlockSyncFailureAmino {
  block_height?: string;
  created_at?: string;
  reason?: string;
}
export interface BlockSyncFailureAminoMsg {
  type: "/cosmatics.BlockSyncFailure";
  value: BlockSyncFailureAmino;
}
export interface BlockSyncFailureSDKType {
  block_height: bigint;
  created_at: TimestampSDKType;
  reason: string;
}
function createBaseBlockSyncFailure(): BlockSyncFailure {
  return {
    blockHeight: BigInt(0),
    createdAt: Timestamp.fromPartial({}),
    reason: ""
  };
}
export const BlockSyncFailure = {
  typeUrl: "/cosmatics.BlockSyncFailure",
  is(o: any): o is BlockSyncFailure {
    return o && (o.$typeUrl === BlockSyncFailure.typeUrl || typeof o.blockHeight === "bigint" && Timestamp.is(o.createdAt) && typeof o.reason === "string");
  },
  isSDK(o: any): o is BlockSyncFailureSDKType {
    return o && (o.$typeUrl === BlockSyncFailure.typeUrl || typeof o.block_height === "bigint" && Timestamp.isSDK(o.created_at) && typeof o.reason === "string");
  },
  isAmino(o: any): o is BlockSyncFailureAmino {
    return o && (o.$typeUrl === BlockSyncFailure.typeUrl || typeof o.block_height === "bigint" && Timestamp.isAmino(o.created_at) && typeof o.reason === "string");
  },
  encode(message: BlockSyncFailure, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(18).fork()).ldelim();
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): BlockSyncFailure {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockSyncFailure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.createdAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockSyncFailure {
    return {
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      reason: isSet(object.reason) ? String(object.reason) : ""
    };
  },
  toJSON(message: BlockSyncFailure): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    message.createdAt !== undefined && (obj.createdAt = fromTimestamp(message.createdAt).toISOString());
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },
  fromPartial(object: Partial<BlockSyncFailure>): BlockSyncFailure {
    const message = createBaseBlockSyncFailure();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Timestamp.fromPartial(object.createdAt) : undefined;
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: BlockSyncFailureAmino): BlockSyncFailure {
    const message = createBaseBlockSyncFailure();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = Timestamp.fromAmino(object.created_at);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: BlockSyncFailure, useInterfaces: boolean = true): BlockSyncFailureAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.created_at = message.createdAt ? Timestamp.toAmino(message.createdAt, useInterfaces) : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: BlockSyncFailureAminoMsg): BlockSyncFailure {
    return BlockSyncFailure.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockSyncFailureProtoMsg, useInterfaces: boolean = true): BlockSyncFailure {
    return BlockSyncFailure.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: BlockSyncFailure): Uint8Array {
    return BlockSyncFailure.encode(message).finish();
  },
  toProtoMsg(message: BlockSyncFailure): BlockSyncFailureProtoMsg {
    return {
      typeUrl: "/cosmatics.BlockSyncFailure",
      value: BlockSyncFailure.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BlockSyncFailure.typeUrl, BlockSyncFailure);