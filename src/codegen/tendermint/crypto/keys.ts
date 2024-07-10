import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
/** PublicKey defines the keys available for use with Validators */
export interface PublicKey {
  ed25519?: Uint8Array;
  secp256k1?: Uint8Array;
}
export interface PublicKeyProtoMsg {
  typeUrl: "/tendermint.crypto.PublicKey";
  value: Uint8Array;
}
/** PublicKey defines the keys available for use with Validators */
export interface PublicKeyAmino {
  ed25519?: string;
  secp256k1?: string;
}
export interface PublicKeyAminoMsg {
  type: "/tendermint.crypto.PublicKey";
  value: PublicKeyAmino;
}
/** PublicKey defines the keys available for use with Validators */
export interface PublicKeySDKType {
  ed25519?: Uint8Array;
  secp256k1?: Uint8Array;
}
function createBasePublicKey(): PublicKey {
  return {
    ed25519: undefined,
    secp256k1: undefined
  };
}
export const PublicKey = {
  typeUrl: "/tendermint.crypto.PublicKey",
  is(o: any): o is PublicKey {
    return o && o.$typeUrl === PublicKey.typeUrl;
  },
  isSDK(o: any): o is PublicKeySDKType {
    return o && o.$typeUrl === PublicKey.typeUrl;
  },
  isAmino(o: any): o is PublicKeyAmino {
    return o && o.$typeUrl === PublicKey.typeUrl;
  },
  encode(message: PublicKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ed25519 !== undefined) {
      writer.uint32(10).bytes(message.ed25519);
    }
    if (message.secp256k1 !== undefined) {
      writer.uint32(18).bytes(message.secp256k1);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PublicKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublicKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ed25519 = reader.bytes();
          break;
        case 2:
          message.secp256k1 = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PublicKey {
    return {
      ed25519: isSet(object.ed25519) ? bytesFromBase64(object.ed25519) : undefined,
      secp256k1: isSet(object.secp256k1) ? bytesFromBase64(object.secp256k1) : undefined
    };
  },
  toJSON(message: PublicKey): unknown {
    const obj: any = {};
    message.ed25519 !== undefined && (obj.ed25519 = message.ed25519 !== undefined ? base64FromBytes(message.ed25519) : undefined);
    message.secp256k1 !== undefined && (obj.secp256k1 = message.secp256k1 !== undefined ? base64FromBytes(message.secp256k1) : undefined);
    return obj;
  },
  fromPartial(object: Partial<PublicKey>): PublicKey {
    const message = createBasePublicKey();
    message.ed25519 = object.ed25519 ?? undefined;
    message.secp256k1 = object.secp256k1 ?? undefined;
    return message;
  },
  fromAmino(object: PublicKeyAmino): PublicKey {
    const message = createBasePublicKey();
    if (object.ed25519 !== undefined && object.ed25519 !== null) {
      message.ed25519 = bytesFromBase64(object.ed25519);
    }
    if (object.secp256k1 !== undefined && object.secp256k1 !== null) {
      message.secp256k1 = bytesFromBase64(object.secp256k1);
    }
    return message;
  },
  toAmino(message: PublicKey, useInterfaces: boolean = true): PublicKeyAmino {
    const obj: any = {};
    obj.ed25519 = message.ed25519 ? base64FromBytes(message.ed25519) : undefined;
    obj.secp256k1 = message.secp256k1 ? base64FromBytes(message.secp256k1) : undefined;
    return obj;
  },
  fromAminoMsg(object: PublicKeyAminoMsg): PublicKey {
    return PublicKey.fromAmino(object.value);
  },
  fromProtoMsg(message: PublicKeyProtoMsg, useInterfaces: boolean = true): PublicKey {
    return PublicKey.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PublicKey): Uint8Array {
    return PublicKey.encode(message).finish();
  },
  toProtoMsg(message: PublicKey): PublicKeyProtoMsg {
    return {
      typeUrl: "/tendermint.crypto.PublicKey",
      value: PublicKey.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PublicKey.typeUrl, PublicKey);