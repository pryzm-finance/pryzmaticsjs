import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface SlashWindowStatistics {
  closeBlockHeight: bigint;
  voteIntervals: bigint;
}
export interface SlashWindowStatisticsProtoMsg {
  typeUrl: "/pryzmatics.oracle.SlashWindowStatistics";
  value: Uint8Array;
}
export interface SlashWindowStatisticsAmino {
  close_block_height?: string;
  vote_intervals?: string;
}
export interface SlashWindowStatisticsAminoMsg {
  type: "/pryzmatics.oracle.SlashWindowStatistics";
  value: SlashWindowStatisticsAmino;
}
export interface SlashWindowStatisticsSDKType {
  close_block_height: bigint;
  vote_intervals: bigint;
}
function createBaseSlashWindowStatistics(): SlashWindowStatistics {
  return {
    closeBlockHeight: BigInt(0),
    voteIntervals: BigInt(0)
  };
}
export const SlashWindowStatistics = {
  typeUrl: "/pryzmatics.oracle.SlashWindowStatistics",
  is(o: any): o is SlashWindowStatistics {
    return o && (o.$typeUrl === SlashWindowStatistics.typeUrl || typeof o.closeBlockHeight === "bigint" && typeof o.voteIntervals === "bigint");
  },
  isSDK(o: any): o is SlashWindowStatisticsSDKType {
    return o && (o.$typeUrl === SlashWindowStatistics.typeUrl || typeof o.close_block_height === "bigint" && typeof o.vote_intervals === "bigint");
  },
  isAmino(o: any): o is SlashWindowStatisticsAmino {
    return o && (o.$typeUrl === SlashWindowStatistics.typeUrl || typeof o.close_block_height === "bigint" && typeof o.vote_intervals === "bigint");
  },
  encode(message: SlashWindowStatistics, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.closeBlockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.closeBlockHeight);
    }
    if (message.voteIntervals !== BigInt(0)) {
      writer.uint32(16).int64(message.voteIntervals);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SlashWindowStatistics {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlashWindowStatistics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.closeBlockHeight = reader.int64();
          break;
        case 2:
          message.voteIntervals = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SlashWindowStatistics {
    return {
      closeBlockHeight: isSet(object.closeBlockHeight) ? BigInt(object.closeBlockHeight.toString()) : BigInt(0),
      voteIntervals: isSet(object.voteIntervals) ? BigInt(object.voteIntervals.toString()) : BigInt(0)
    };
  },
  toJSON(message: SlashWindowStatistics): unknown {
    const obj: any = {};
    message.closeBlockHeight !== undefined && (obj.closeBlockHeight = (message.closeBlockHeight || BigInt(0)).toString());
    message.voteIntervals !== undefined && (obj.voteIntervals = (message.voteIntervals || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<SlashWindowStatistics>): SlashWindowStatistics {
    const message = createBaseSlashWindowStatistics();
    message.closeBlockHeight = object.closeBlockHeight !== undefined && object.closeBlockHeight !== null ? BigInt(object.closeBlockHeight.toString()) : BigInt(0);
    message.voteIntervals = object.voteIntervals !== undefined && object.voteIntervals !== null ? BigInt(object.voteIntervals.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SlashWindowStatisticsAmino): SlashWindowStatistics {
    const message = createBaseSlashWindowStatistics();
    if (object.close_block_height !== undefined && object.close_block_height !== null) {
      message.closeBlockHeight = BigInt(object.close_block_height);
    }
    if (object.vote_intervals !== undefined && object.vote_intervals !== null) {
      message.voteIntervals = BigInt(object.vote_intervals);
    }
    return message;
  },
  toAmino(message: SlashWindowStatistics, useInterfaces: boolean = true): SlashWindowStatisticsAmino {
    const obj: any = {};
    obj.close_block_height = message.closeBlockHeight ? message.closeBlockHeight.toString() : undefined;
    obj.vote_intervals = message.voteIntervals ? message.voteIntervals.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SlashWindowStatisticsAminoMsg): SlashWindowStatistics {
    return SlashWindowStatistics.fromAmino(object.value);
  },
  fromProtoMsg(message: SlashWindowStatisticsProtoMsg, useInterfaces: boolean = true): SlashWindowStatistics {
    return SlashWindowStatistics.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SlashWindowStatistics): Uint8Array {
    return SlashWindowStatistics.encode(message).finish();
  },
  toProtoMsg(message: SlashWindowStatistics): SlashWindowStatisticsProtoMsg {
    return {
      typeUrl: "/pryzmatics.oracle.SlashWindowStatistics",
      value: SlashWindowStatistics.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SlashWindowStatistics.typeUrl, SlashWindowStatistics);