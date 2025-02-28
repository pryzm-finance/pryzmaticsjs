import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface UserPulseTradeVolume {
  address: string;
  icnsName: string;
  totalVolume: string;
  volume24h: string;
  volume7d: string;
  volume30d: string;
  rankTotalVolume: bigint;
  rankVolume24h: bigint;
  rankVolume7d: bigint;
  rankVolume30d: bigint;
}
export interface UserPulseTradeVolumeProtoMsg {
  typeUrl: "/pryzmatics.trade.UserPulseTradeVolume";
  value: Uint8Array;
}
export interface UserPulseTradeVolumeAmino {
  address?: string;
  icns_name?: string;
  total_volume?: string;
  volume_24h?: string;
  volume_7d?: string;
  volume_30d?: string;
  rank_total_volume?: string;
  rank_volume_24h?: string;
  rank_volume_7d?: string;
  rank_volume_30d?: string;
}
export interface UserPulseTradeVolumeAminoMsg {
  type: "/pryzmatics.trade.UserPulseTradeVolume";
  value: UserPulseTradeVolumeAmino;
}
export interface UserPulseTradeVolumeSDKType {
  address: string;
  icns_name: string;
  total_volume: string;
  volume_24h: string;
  volume_7d: string;
  volume_30d: string;
  rank_total_volume: bigint;
  rank_volume_24h: bigint;
  rank_volume_7d: bigint;
  rank_volume_30d: bigint;
}
function createBaseUserPulseTradeVolume(): UserPulseTradeVolume {
  return {
    address: "",
    icnsName: "",
    totalVolume: "",
    volume24h: "",
    volume7d: "",
    volume30d: "",
    rankTotalVolume: BigInt(0),
    rankVolume24h: BigInt(0),
    rankVolume7d: BigInt(0),
    rankVolume30d: BigInt(0)
  };
}
export const UserPulseTradeVolume = {
  typeUrl: "/pryzmatics.trade.UserPulseTradeVolume",
  is(o: any): o is UserPulseTradeVolume {
    return o && (o.$typeUrl === UserPulseTradeVolume.typeUrl || typeof o.address === "string" && typeof o.icnsName === "string" && typeof o.totalVolume === "string" && typeof o.volume24h === "string" && typeof o.volume7d === "string" && typeof o.volume30d === "string" && typeof o.rankTotalVolume === "bigint" && typeof o.rankVolume24h === "bigint" && typeof o.rankVolume7d === "bigint" && typeof o.rankVolume30d === "bigint");
  },
  isSDK(o: any): o is UserPulseTradeVolumeSDKType {
    return o && (o.$typeUrl === UserPulseTradeVolume.typeUrl || typeof o.address === "string" && typeof o.icns_name === "string" && typeof o.total_volume === "string" && typeof o.volume_24h === "string" && typeof o.volume_7d === "string" && typeof o.volume_30d === "string" && typeof o.rank_total_volume === "bigint" && typeof o.rank_volume_24h === "bigint" && typeof o.rank_volume_7d === "bigint" && typeof o.rank_volume_30d === "bigint");
  },
  isAmino(o: any): o is UserPulseTradeVolumeAmino {
    return o && (o.$typeUrl === UserPulseTradeVolume.typeUrl || typeof o.address === "string" && typeof o.icns_name === "string" && typeof o.total_volume === "string" && typeof o.volume_24h === "string" && typeof o.volume_7d === "string" && typeof o.volume_30d === "string" && typeof o.rank_total_volume === "bigint" && typeof o.rank_volume_24h === "bigint" && typeof o.rank_volume_7d === "bigint" && typeof o.rank_volume_30d === "bigint");
  },
  encode(message: UserPulseTradeVolume, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.icnsName !== "") {
      writer.uint32(18).string(message.icnsName);
    }
    if (message.totalVolume !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.totalVolume, 18).atomics);
    }
    if (message.volume24h !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.volume24h, 18).atomics);
    }
    if (message.volume7d !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.volume7d, 18).atomics);
    }
    if (message.volume30d !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.volume30d, 18).atomics);
    }
    if (message.rankTotalVolume !== BigInt(0)) {
      writer.uint32(56).uint64(message.rankTotalVolume);
    }
    if (message.rankVolume24h !== BigInt(0)) {
      writer.uint32(64).uint64(message.rankVolume24h);
    }
    if (message.rankVolume7d !== BigInt(0)) {
      writer.uint32(72).uint64(message.rankVolume7d);
    }
    if (message.rankVolume30d !== BigInt(0)) {
      writer.uint32(80).uint64(message.rankVolume30d);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): UserPulseTradeVolume {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPulseTradeVolume();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.icnsName = reader.string();
          break;
        case 3:
          message.totalVolume = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.volume24h = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.volume7d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.volume30d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.rankTotalVolume = reader.uint64();
          break;
        case 8:
          message.rankVolume24h = reader.uint64();
          break;
        case 9:
          message.rankVolume7d = reader.uint64();
          break;
        case 10:
          message.rankVolume30d = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserPulseTradeVolume {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      icnsName: isSet(object.icnsName) ? String(object.icnsName) : "",
      totalVolume: isSet(object.totalVolume) ? String(object.totalVolume) : "",
      volume24h: isSet(object.volume24h) ? String(object.volume24h) : "",
      volume7d: isSet(object.volume7d) ? String(object.volume7d) : "",
      volume30d: isSet(object.volume30d) ? String(object.volume30d) : "",
      rankTotalVolume: isSet(object.rankTotalVolume) ? BigInt(object.rankTotalVolume.toString()) : BigInt(0),
      rankVolume24h: isSet(object.rankVolume24h) ? BigInt(object.rankVolume24h.toString()) : BigInt(0),
      rankVolume7d: isSet(object.rankVolume7d) ? BigInt(object.rankVolume7d.toString()) : BigInt(0),
      rankVolume30d: isSet(object.rankVolume30d) ? BigInt(object.rankVolume30d.toString()) : BigInt(0)
    };
  },
  toJSON(message: UserPulseTradeVolume): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.icnsName !== undefined && (obj.icnsName = message.icnsName);
    message.totalVolume !== undefined && (obj.totalVolume = message.totalVolume);
    message.volume24h !== undefined && (obj.volume24h = message.volume24h);
    message.volume7d !== undefined && (obj.volume7d = message.volume7d);
    message.volume30d !== undefined && (obj.volume30d = message.volume30d);
    message.rankTotalVolume !== undefined && (obj.rankTotalVolume = (message.rankTotalVolume || BigInt(0)).toString());
    message.rankVolume24h !== undefined && (obj.rankVolume24h = (message.rankVolume24h || BigInt(0)).toString());
    message.rankVolume7d !== undefined && (obj.rankVolume7d = (message.rankVolume7d || BigInt(0)).toString());
    message.rankVolume30d !== undefined && (obj.rankVolume30d = (message.rankVolume30d || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<UserPulseTradeVolume>): UserPulseTradeVolume {
    const message = createBaseUserPulseTradeVolume();
    message.address = object.address ?? "";
    message.icnsName = object.icnsName ?? "";
    message.totalVolume = object.totalVolume ?? "";
    message.volume24h = object.volume24h ?? "";
    message.volume7d = object.volume7d ?? "";
    message.volume30d = object.volume30d ?? "";
    message.rankTotalVolume = object.rankTotalVolume !== undefined && object.rankTotalVolume !== null ? BigInt(object.rankTotalVolume.toString()) : BigInt(0);
    message.rankVolume24h = object.rankVolume24h !== undefined && object.rankVolume24h !== null ? BigInt(object.rankVolume24h.toString()) : BigInt(0);
    message.rankVolume7d = object.rankVolume7d !== undefined && object.rankVolume7d !== null ? BigInt(object.rankVolume7d.toString()) : BigInt(0);
    message.rankVolume30d = object.rankVolume30d !== undefined && object.rankVolume30d !== null ? BigInt(object.rankVolume30d.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: UserPulseTradeVolumeAmino): UserPulseTradeVolume {
    const message = createBaseUserPulseTradeVolume();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.icns_name !== undefined && object.icns_name !== null) {
      message.icnsName = object.icns_name;
    }
    if (object.total_volume !== undefined && object.total_volume !== null) {
      message.totalVolume = object.total_volume;
    }
    if (object.volume_24h !== undefined && object.volume_24h !== null) {
      message.volume24h = object.volume_24h;
    }
    if (object.volume_7d !== undefined && object.volume_7d !== null) {
      message.volume7d = object.volume_7d;
    }
    if (object.volume_30d !== undefined && object.volume_30d !== null) {
      message.volume30d = object.volume_30d;
    }
    if (object.rank_total_volume !== undefined && object.rank_total_volume !== null) {
      message.rankTotalVolume = BigInt(object.rank_total_volume);
    }
    if (object.rank_volume_24h !== undefined && object.rank_volume_24h !== null) {
      message.rankVolume24h = BigInt(object.rank_volume_24h);
    }
    if (object.rank_volume_7d !== undefined && object.rank_volume_7d !== null) {
      message.rankVolume7d = BigInt(object.rank_volume_7d);
    }
    if (object.rank_volume_30d !== undefined && object.rank_volume_30d !== null) {
      message.rankVolume30d = BigInt(object.rank_volume_30d);
    }
    return message;
  },
  toAmino(message: UserPulseTradeVolume, useInterfaces: boolean = true): UserPulseTradeVolumeAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.icns_name = message.icnsName === "" ? undefined : message.icnsName;
    obj.total_volume = padDecimal(message.totalVolume) === "" ? undefined : padDecimal(message.totalVolume);
    obj.volume_24h = padDecimal(message.volume24h) === "" ? undefined : padDecimal(message.volume24h);
    obj.volume_7d = padDecimal(message.volume7d) === "" ? undefined : padDecimal(message.volume7d);
    obj.volume_30d = padDecimal(message.volume30d) === "" ? undefined : padDecimal(message.volume30d);
    obj.rank_total_volume = message.rankTotalVolume ? message.rankTotalVolume.toString() : undefined;
    obj.rank_volume_24h = message.rankVolume24h ? message.rankVolume24h.toString() : undefined;
    obj.rank_volume_7d = message.rankVolume7d ? message.rankVolume7d.toString() : undefined;
    obj.rank_volume_30d = message.rankVolume30d ? message.rankVolume30d.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: UserPulseTradeVolumeAminoMsg): UserPulseTradeVolume {
    return UserPulseTradeVolume.fromAmino(object.value);
  },
  fromProtoMsg(message: UserPulseTradeVolumeProtoMsg, useInterfaces: boolean = true): UserPulseTradeVolume {
    return UserPulseTradeVolume.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: UserPulseTradeVolume): Uint8Array {
    return UserPulseTradeVolume.encode(message).finish();
  },
  toProtoMsg(message: UserPulseTradeVolume): UserPulseTradeVolumeProtoMsg {
    return {
      typeUrl: "/pryzmatics.trade.UserPulseTradeVolume",
      value: UserPulseTradeVolume.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UserPulseTradeVolume.typeUrl, UserPulseTradeVolume);