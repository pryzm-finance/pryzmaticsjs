import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../helpers";
import { GlobalDecoderRegistry } from "../registry";
export interface SyncState {
  blockHeight: bigint;
  blockTime: Timestamp;
}
export interface SyncStateProtoMsg {
  typeUrl: "/cosmatics.SyncState";
  value: Uint8Array;
}
export interface SyncStateAmino {
  block_height?: string;
  block_time?: string;
}
export interface SyncStateAminoMsg {
  type: "/cosmatics.SyncState";
  value: SyncStateAmino;
}
export interface SyncStateSDKType {
  block_height: bigint;
  block_time: TimestampSDKType;
}
export interface SyncStatistics {
  totalBlocks: bigint;
  avgSyncDelaySeconds: bigint;
  avgIndexerBlockTimeSeconds: bigint;
  avgIndexerBlocksPerSecond: number;
}
export interface SyncStatisticsProtoMsg {
  typeUrl: "/cosmatics.SyncStatistics";
  value: Uint8Array;
}
export interface SyncStatisticsAmino {
  total_blocks?: string;
  avg_sync_delay_seconds?: string;
  avg_indexer_block_time_seconds?: string;
  avg_indexer_blocks_per_second?: number;
}
export interface SyncStatisticsAminoMsg {
  type: "/cosmatics.SyncStatistics";
  value: SyncStatisticsAmino;
}
export interface SyncStatisticsSDKType {
  total_blocks: bigint;
  avg_sync_delay_seconds: bigint;
  avg_indexer_block_time_seconds: bigint;
  avg_indexer_blocks_per_second: number;
}
function createBaseSyncState(): SyncState {
  return {
    blockHeight: BigInt(0),
    blockTime: Timestamp.fromPartial({})
  };
}
export const SyncState = {
  typeUrl: "/cosmatics.SyncState",
  is(o: any): o is SyncState {
    return o && (o.$typeUrl === SyncState.typeUrl || typeof o.blockHeight === "bigint" && Timestamp.is(o.blockTime));
  },
  isSDK(o: any): o is SyncStateSDKType {
    return o && (o.$typeUrl === SyncState.typeUrl || typeof o.block_height === "bigint" && Timestamp.isSDK(o.block_time));
  },
  isAmino(o: any): o is SyncStateAmino {
    return o && (o.$typeUrl === SyncState.typeUrl || typeof o.block_height === "bigint" && Timestamp.isAmino(o.block_time));
  },
  encode(message: SyncState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SyncState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.blockTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SyncState {
    return {
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined
    };
  },
  toJSON(message: SyncState): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    message.blockTime !== undefined && (obj.blockTime = fromTimestamp(message.blockTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<SyncState>): SyncState {
    const message = createBaseSyncState();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    return message;
  },
  fromAmino(object: SyncStateAmino): SyncState {
    const message = createBaseSyncState();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = Timestamp.fromAmino(object.block_time);
    }
    return message;
  },
  toAmino(message: SyncState, useInterfaces: boolean = true): SyncStateAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.block_time = message.blockTime ? Timestamp.toAmino(message.blockTime, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: SyncStateAminoMsg): SyncState {
    return SyncState.fromAmino(object.value);
  },
  fromProtoMsg(message: SyncStateProtoMsg, useInterfaces: boolean = true): SyncState {
    return SyncState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SyncState): Uint8Array {
    return SyncState.encode(message).finish();
  },
  toProtoMsg(message: SyncState): SyncStateProtoMsg {
    return {
      typeUrl: "/cosmatics.SyncState",
      value: SyncState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SyncState.typeUrl, SyncState);
function createBaseSyncStatistics(): SyncStatistics {
  return {
    totalBlocks: BigInt(0),
    avgSyncDelaySeconds: BigInt(0),
    avgIndexerBlockTimeSeconds: BigInt(0),
    avgIndexerBlocksPerSecond: 0
  };
}
export const SyncStatistics = {
  typeUrl: "/cosmatics.SyncStatistics",
  is(o: any): o is SyncStatistics {
    return o && (o.$typeUrl === SyncStatistics.typeUrl || typeof o.totalBlocks === "bigint" && typeof o.avgSyncDelaySeconds === "bigint" && typeof o.avgIndexerBlockTimeSeconds === "bigint" && typeof o.avgIndexerBlocksPerSecond === "number");
  },
  isSDK(o: any): o is SyncStatisticsSDKType {
    return o && (o.$typeUrl === SyncStatistics.typeUrl || typeof o.total_blocks === "bigint" && typeof o.avg_sync_delay_seconds === "bigint" && typeof o.avg_indexer_block_time_seconds === "bigint" && typeof o.avg_indexer_blocks_per_second === "number");
  },
  isAmino(o: any): o is SyncStatisticsAmino {
    return o && (o.$typeUrl === SyncStatistics.typeUrl || typeof o.total_blocks === "bigint" && typeof o.avg_sync_delay_seconds === "bigint" && typeof o.avg_indexer_block_time_seconds === "bigint" && typeof o.avg_indexer_blocks_per_second === "number");
  },
  encode(message: SyncStatistics, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalBlocks !== BigInt(0)) {
      writer.uint32(8).uint64(message.totalBlocks);
    }
    if (message.avgSyncDelaySeconds !== BigInt(0)) {
      writer.uint32(16).uint64(message.avgSyncDelaySeconds);
    }
    if (message.avgIndexerBlockTimeSeconds !== BigInt(0)) {
      writer.uint32(24).uint64(message.avgIndexerBlockTimeSeconds);
    }
    if (message.avgIndexerBlocksPerSecond !== 0) {
      writer.uint32(37).float(message.avgIndexerBlocksPerSecond);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SyncStatistics {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncStatistics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalBlocks = reader.uint64();
          break;
        case 2:
          message.avgSyncDelaySeconds = reader.uint64();
          break;
        case 3:
          message.avgIndexerBlockTimeSeconds = reader.uint64();
          break;
        case 4:
          message.avgIndexerBlocksPerSecond = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SyncStatistics {
    return {
      totalBlocks: isSet(object.totalBlocks) ? BigInt(object.totalBlocks.toString()) : BigInt(0),
      avgSyncDelaySeconds: isSet(object.avgSyncDelaySeconds) ? BigInt(object.avgSyncDelaySeconds.toString()) : BigInt(0),
      avgIndexerBlockTimeSeconds: isSet(object.avgIndexerBlockTimeSeconds) ? BigInt(object.avgIndexerBlockTimeSeconds.toString()) : BigInt(0),
      avgIndexerBlocksPerSecond: isSet(object.avgIndexerBlocksPerSecond) ? Number(object.avgIndexerBlocksPerSecond) : 0
    };
  },
  toJSON(message: SyncStatistics): unknown {
    const obj: any = {};
    message.totalBlocks !== undefined && (obj.totalBlocks = (message.totalBlocks || BigInt(0)).toString());
    message.avgSyncDelaySeconds !== undefined && (obj.avgSyncDelaySeconds = (message.avgSyncDelaySeconds || BigInt(0)).toString());
    message.avgIndexerBlockTimeSeconds !== undefined && (obj.avgIndexerBlockTimeSeconds = (message.avgIndexerBlockTimeSeconds || BigInt(0)).toString());
    message.avgIndexerBlocksPerSecond !== undefined && (obj.avgIndexerBlocksPerSecond = message.avgIndexerBlocksPerSecond);
    return obj;
  },
  fromPartial(object: Partial<SyncStatistics>): SyncStatistics {
    const message = createBaseSyncStatistics();
    message.totalBlocks = object.totalBlocks !== undefined && object.totalBlocks !== null ? BigInt(object.totalBlocks.toString()) : BigInt(0);
    message.avgSyncDelaySeconds = object.avgSyncDelaySeconds !== undefined && object.avgSyncDelaySeconds !== null ? BigInt(object.avgSyncDelaySeconds.toString()) : BigInt(0);
    message.avgIndexerBlockTimeSeconds = object.avgIndexerBlockTimeSeconds !== undefined && object.avgIndexerBlockTimeSeconds !== null ? BigInt(object.avgIndexerBlockTimeSeconds.toString()) : BigInt(0);
    message.avgIndexerBlocksPerSecond = object.avgIndexerBlocksPerSecond ?? 0;
    return message;
  },
  fromAmino(object: SyncStatisticsAmino): SyncStatistics {
    const message = createBaseSyncStatistics();
    if (object.total_blocks !== undefined && object.total_blocks !== null) {
      message.totalBlocks = BigInt(object.total_blocks);
    }
    if (object.avg_sync_delay_seconds !== undefined && object.avg_sync_delay_seconds !== null) {
      message.avgSyncDelaySeconds = BigInt(object.avg_sync_delay_seconds);
    }
    if (object.avg_indexer_block_time_seconds !== undefined && object.avg_indexer_block_time_seconds !== null) {
      message.avgIndexerBlockTimeSeconds = BigInt(object.avg_indexer_block_time_seconds);
    }
    if (object.avg_indexer_blocks_per_second !== undefined && object.avg_indexer_blocks_per_second !== null) {
      message.avgIndexerBlocksPerSecond = object.avg_indexer_blocks_per_second;
    }
    return message;
  },
  toAmino(message: SyncStatistics, useInterfaces: boolean = true): SyncStatisticsAmino {
    const obj: any = {};
    obj.total_blocks = message.totalBlocks ? message.totalBlocks.toString() : undefined;
    obj.avg_sync_delay_seconds = message.avgSyncDelaySeconds ? message.avgSyncDelaySeconds.toString() : undefined;
    obj.avg_indexer_block_time_seconds = message.avgIndexerBlockTimeSeconds ? message.avgIndexerBlockTimeSeconds.toString() : undefined;
    obj.avg_indexer_blocks_per_second = message.avgIndexerBlocksPerSecond === 0 ? undefined : message.avgIndexerBlocksPerSecond;
    return obj;
  },
  fromAminoMsg(object: SyncStatisticsAminoMsg): SyncStatistics {
    return SyncStatistics.fromAmino(object.value);
  },
  fromProtoMsg(message: SyncStatisticsProtoMsg, useInterfaces: boolean = true): SyncStatistics {
    return SyncStatistics.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SyncStatistics): Uint8Array {
    return SyncStatistics.encode(message).finish();
  },
  toProtoMsg(message: SyncStatistics): SyncStatisticsProtoMsg {
    return {
      typeUrl: "/cosmatics.SyncStatistics",
      value: SyncStatistics.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SyncStatistics.typeUrl, SyncStatistics);