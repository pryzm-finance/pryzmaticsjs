import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface UserStake {
  id: bigint;
  address: string;
  denom: string;
  bondedAmount: string;
}
export interface UserStakeProtoMsg {
  typeUrl: "/pryzmatics.ystaking.UserStake";
  value: Uint8Array;
}
export interface UserStakeAmino {
  id?: string;
  address?: string;
  denom?: string;
  bonded_amount?: string;
}
export interface UserStakeAminoMsg {
  type: "/pryzmatics.ystaking.UserStake";
  value: UserStakeAmino;
}
export interface UserStakeSDKType {
  id: bigint;
  address: string;
  denom: string;
  bonded_amount: string;
}
function createBaseUserStake(): UserStake {
  return {
    id: BigInt(0),
    address: "",
    denom: "",
    bondedAmount: ""
  };
}
export const UserStake = {
  typeUrl: "/pryzmatics.ystaking.UserStake",
  is(o: any): o is UserStake {
    return o && (o.$typeUrl === UserStake.typeUrl || typeof o.id === "bigint" && typeof o.address === "string" && typeof o.denom === "string" && typeof o.bondedAmount === "string");
  },
  isSDK(o: any): o is UserStakeSDKType {
    return o && (o.$typeUrl === UserStake.typeUrl || typeof o.id === "bigint" && typeof o.address === "string" && typeof o.denom === "string" && typeof o.bonded_amount === "string");
  },
  isAmino(o: any): o is UserStakeAmino {
    return o && (o.$typeUrl === UserStake.typeUrl || typeof o.id === "bigint" && typeof o.address === "string" && typeof o.denom === "string" && typeof o.bonded_amount === "string");
  },
  encode(message: UserStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.bondedAmount !== "") {
      writer.uint32(34).string(message.bondedAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): UserStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.bondedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserStake {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      bondedAmount: isSet(object.bondedAmount) ? String(object.bondedAmount) : ""
    };
  },
  toJSON(message: UserStake): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    message.bondedAmount !== undefined && (obj.bondedAmount = message.bondedAmount);
    return obj;
  },
  fromPartial(object: Partial<UserStake>): UserStake {
    const message = createBaseUserStake();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    message.bondedAmount = object.bondedAmount ?? "";
    return message;
  },
  fromAmino(object: UserStakeAmino): UserStake {
    const message = createBaseUserStake();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.bonded_amount !== undefined && object.bonded_amount !== null) {
      message.bondedAmount = object.bonded_amount;
    }
    return message;
  },
  toAmino(message: UserStake, useInterfaces: boolean = true): UserStakeAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.bonded_amount = message.bondedAmount === "" ? undefined : message.bondedAmount;
    return obj;
  },
  fromAminoMsg(object: UserStakeAminoMsg): UserStake {
    return UserStake.fromAmino(object.value);
  },
  fromProtoMsg(message: UserStakeProtoMsg, useInterfaces: boolean = true): UserStake {
    return UserStake.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: UserStake): Uint8Array {
    return UserStake.encode(message).finish();
  },
  toProtoMsg(message: UserStake): UserStakeProtoMsg {
    return {
      typeUrl: "/pryzmatics.ystaking.UserStake",
      value: UserStake.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UserStake.typeUrl, UserStake);