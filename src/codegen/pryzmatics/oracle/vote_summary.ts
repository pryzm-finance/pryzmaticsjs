import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface VoteSummary {
  totalVoteIntervals: bigint;
  totalSlashWindows: bigint;
  latestSlashWindowVoteIntervals: bigint;
}
export interface VoteSummaryProtoMsg {
  typeUrl: "/pryzmatics.oracle.VoteSummary";
  value: Uint8Array;
}
export interface VoteSummaryAmino {
  total_vote_intervals?: string;
  total_slash_windows?: string;
  latest_slash_window_vote_intervals?: string;
}
export interface VoteSummaryAminoMsg {
  type: "/pryzmatics.oracle.VoteSummary";
  value: VoteSummaryAmino;
}
export interface VoteSummarySDKType {
  total_vote_intervals: bigint;
  total_slash_windows: bigint;
  latest_slash_window_vote_intervals: bigint;
}
function createBaseVoteSummary(): VoteSummary {
  return {
    totalVoteIntervals: BigInt(0),
    totalSlashWindows: BigInt(0),
    latestSlashWindowVoteIntervals: BigInt(0)
  };
}
export const VoteSummary = {
  typeUrl: "/pryzmatics.oracle.VoteSummary",
  is(o: any): o is VoteSummary {
    return o && (o.$typeUrl === VoteSummary.typeUrl || typeof o.totalVoteIntervals === "bigint" && typeof o.totalSlashWindows === "bigint" && typeof o.latestSlashWindowVoteIntervals === "bigint");
  },
  isSDK(o: any): o is VoteSummarySDKType {
    return o && (o.$typeUrl === VoteSummary.typeUrl || typeof o.total_vote_intervals === "bigint" && typeof o.total_slash_windows === "bigint" && typeof o.latest_slash_window_vote_intervals === "bigint");
  },
  isAmino(o: any): o is VoteSummaryAmino {
    return o && (o.$typeUrl === VoteSummary.typeUrl || typeof o.total_vote_intervals === "bigint" && typeof o.total_slash_windows === "bigint" && typeof o.latest_slash_window_vote_intervals === "bigint");
  },
  encode(message: VoteSummary, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalVoteIntervals !== BigInt(0)) {
      writer.uint32(8).int64(message.totalVoteIntervals);
    }
    if (message.totalSlashWindows !== BigInt(0)) {
      writer.uint32(16).int64(message.totalSlashWindows);
    }
    if (message.latestSlashWindowVoteIntervals !== BigInt(0)) {
      writer.uint32(24).int64(message.latestSlashWindowVoteIntervals);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): VoteSummary {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalVoteIntervals = reader.int64();
          break;
        case 2:
          message.totalSlashWindows = reader.int64();
          break;
        case 3:
          message.latestSlashWindowVoteIntervals = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VoteSummary {
    return {
      totalVoteIntervals: isSet(object.totalVoteIntervals) ? BigInt(object.totalVoteIntervals.toString()) : BigInt(0),
      totalSlashWindows: isSet(object.totalSlashWindows) ? BigInt(object.totalSlashWindows.toString()) : BigInt(0),
      latestSlashWindowVoteIntervals: isSet(object.latestSlashWindowVoteIntervals) ? BigInt(object.latestSlashWindowVoteIntervals.toString()) : BigInt(0)
    };
  },
  toJSON(message: VoteSummary): unknown {
    const obj: any = {};
    message.totalVoteIntervals !== undefined && (obj.totalVoteIntervals = (message.totalVoteIntervals || BigInt(0)).toString());
    message.totalSlashWindows !== undefined && (obj.totalSlashWindows = (message.totalSlashWindows || BigInt(0)).toString());
    message.latestSlashWindowVoteIntervals !== undefined && (obj.latestSlashWindowVoteIntervals = (message.latestSlashWindowVoteIntervals || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<VoteSummary>): VoteSummary {
    const message = createBaseVoteSummary();
    message.totalVoteIntervals = object.totalVoteIntervals !== undefined && object.totalVoteIntervals !== null ? BigInt(object.totalVoteIntervals.toString()) : BigInt(0);
    message.totalSlashWindows = object.totalSlashWindows !== undefined && object.totalSlashWindows !== null ? BigInt(object.totalSlashWindows.toString()) : BigInt(0);
    message.latestSlashWindowVoteIntervals = object.latestSlashWindowVoteIntervals !== undefined && object.latestSlashWindowVoteIntervals !== null ? BigInt(object.latestSlashWindowVoteIntervals.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: VoteSummaryAmino): VoteSummary {
    const message = createBaseVoteSummary();
    if (object.total_vote_intervals !== undefined && object.total_vote_intervals !== null) {
      message.totalVoteIntervals = BigInt(object.total_vote_intervals);
    }
    if (object.total_slash_windows !== undefined && object.total_slash_windows !== null) {
      message.totalSlashWindows = BigInt(object.total_slash_windows);
    }
    if (object.latest_slash_window_vote_intervals !== undefined && object.latest_slash_window_vote_intervals !== null) {
      message.latestSlashWindowVoteIntervals = BigInt(object.latest_slash_window_vote_intervals);
    }
    return message;
  },
  toAmino(message: VoteSummary, useInterfaces: boolean = true): VoteSummaryAmino {
    const obj: any = {};
    obj.total_vote_intervals = message.totalVoteIntervals ? message.totalVoteIntervals.toString() : undefined;
    obj.total_slash_windows = message.totalSlashWindows ? message.totalSlashWindows.toString() : undefined;
    obj.latest_slash_window_vote_intervals = message.latestSlashWindowVoteIntervals ? message.latestSlashWindowVoteIntervals.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: VoteSummaryAminoMsg): VoteSummary {
    return VoteSummary.fromAmino(object.value);
  },
  fromProtoMsg(message: VoteSummaryProtoMsg, useInterfaces: boolean = true): VoteSummary {
    return VoteSummary.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: VoteSummary): Uint8Array {
    return VoteSummary.encode(message).finish();
  },
  toProtoMsg(message: VoteSummary): VoteSummaryProtoMsg {
    return {
      typeUrl: "/pryzmatics.oracle.VoteSummary",
      value: VoteSummary.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(VoteSummary.typeUrl, VoteSummary);