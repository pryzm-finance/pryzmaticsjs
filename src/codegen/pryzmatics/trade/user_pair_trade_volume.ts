import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface UserPairTradeVolume {
  address: string;
  volume: string;
  tokenInAmount?: string;
  tokenOutAmount?: string;
}
export interface UserPairTradeVolumeProtoMsg {
  typeUrl: "/pryzmatics.trade.UserPairTradeVolume";
  value: Uint8Array;
}
export interface UserPairTradeVolumeAmino {
  address?: string;
  volume?: string;
  token_in_amount?: string;
  token_out_amount?: string;
}
export interface UserPairTradeVolumeAminoMsg {
  type: "/pryzmatics.trade.UserPairTradeVolume";
  value: UserPairTradeVolumeAmino;
}
export interface UserPairTradeVolumeSDKType {
  address: string;
  volume: string;
  token_in_amount?: string;
  token_out_amount?: string;
}
function createBaseUserPairTradeVolume(): UserPairTradeVolume {
  return {
    address: "",
    volume: "",
    tokenInAmount: undefined,
    tokenOutAmount: undefined
  };
}
export const UserPairTradeVolume = {
  typeUrl: "/pryzmatics.trade.UserPairTradeVolume",
  is(o: any): o is UserPairTradeVolume {
    return o && (o.$typeUrl === UserPairTradeVolume.typeUrl || typeof o.address === "string" && typeof o.volume === "string");
  },
  isSDK(o: any): o is UserPairTradeVolumeSDKType {
    return o && (o.$typeUrl === UserPairTradeVolume.typeUrl || typeof o.address === "string" && typeof o.volume === "string");
  },
  isAmino(o: any): o is UserPairTradeVolumeAmino {
    return o && (o.$typeUrl === UserPairTradeVolume.typeUrl || typeof o.address === "string" && typeof o.volume === "string");
  },
  encode(message: UserPairTradeVolume, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.volume !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.volume, 18).atomics);
    }
    if (message.tokenInAmount !== undefined) {
      writer.uint32(26).string(message.tokenInAmount);
    }
    if (message.tokenOutAmount !== undefined) {
      writer.uint32(34).string(message.tokenOutAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): UserPairTradeVolume {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPairTradeVolume();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.volume = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.tokenInAmount = reader.string();
          break;
        case 4:
          message.tokenOutAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserPairTradeVolume {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      volume: isSet(object.volume) ? String(object.volume) : "",
      tokenInAmount: isSet(object.tokenInAmount) ? String(object.tokenInAmount) : undefined,
      tokenOutAmount: isSet(object.tokenOutAmount) ? String(object.tokenOutAmount) : undefined
    };
  },
  toJSON(message: UserPairTradeVolume): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.volume !== undefined && (obj.volume = message.volume);
    message.tokenInAmount !== undefined && (obj.tokenInAmount = message.tokenInAmount);
    message.tokenOutAmount !== undefined && (obj.tokenOutAmount = message.tokenOutAmount);
    return obj;
  },
  fromPartial(object: Partial<UserPairTradeVolume>): UserPairTradeVolume {
    const message = createBaseUserPairTradeVolume();
    message.address = object.address ?? "";
    message.volume = object.volume ?? "";
    message.tokenInAmount = object.tokenInAmount ?? undefined;
    message.tokenOutAmount = object.tokenOutAmount ?? undefined;
    return message;
  },
  fromAmino(object: UserPairTradeVolumeAmino): UserPairTradeVolume {
    const message = createBaseUserPairTradeVolume();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = object.volume;
    }
    if (object.token_in_amount !== undefined && object.token_in_amount !== null) {
      message.tokenInAmount = object.token_in_amount;
    }
    if (object.token_out_amount !== undefined && object.token_out_amount !== null) {
      message.tokenOutAmount = object.token_out_amount;
    }
    return message;
  },
  toAmino(message: UserPairTradeVolume, useInterfaces: boolean = true): UserPairTradeVolumeAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.volume = padDecimal(message.volume) === "" ? undefined : padDecimal(message.volume);
    obj.token_in_amount = message.tokenInAmount === null ? undefined : message.tokenInAmount;
    obj.token_out_amount = message.tokenOutAmount === null ? undefined : message.tokenOutAmount;
    return obj;
  },
  fromAminoMsg(object: UserPairTradeVolumeAminoMsg): UserPairTradeVolume {
    return UserPairTradeVolume.fromAmino(object.value);
  },
  fromProtoMsg(message: UserPairTradeVolumeProtoMsg, useInterfaces: boolean = true): UserPairTradeVolume {
    return UserPairTradeVolume.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: UserPairTradeVolume): Uint8Array {
    return UserPairTradeVolume.encode(message).finish();
  },
  toProtoMsg(message: UserPairTradeVolume): UserPairTradeVolumeProtoMsg {
    return {
      typeUrl: "/pryzmatics.trade.UserPairTradeVolume",
      value: UserPairTradeVolume.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UserPairTradeVolume.typeUrl, UserPairTradeVolume);