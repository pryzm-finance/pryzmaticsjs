import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface PVaultContract {
  contractAddress: string;
  assetId: string;
  underlyingAsset: string;
  cAssetDenom: string;
  acceptUnderlyingAsset: boolean;
  acceptCAsset: boolean;
  rewardPerDollar: string;
}
export interface PVaultContractProtoMsg {
  typeUrl: "/pryzmatics.pvault.PVaultContract";
  value: Uint8Array;
}
export interface PVaultContractAmino {
  contract_address?: string;
  asset_id?: string;
  underlying_asset?: string;
  c_asset_denom?: string;
  accept_underlying_asset?: boolean;
  accept_c_asset?: boolean;
  reward_per_dollar?: string;
}
export interface PVaultContractAminoMsg {
  type: "/pryzmatics.pvault.PVaultContract";
  value: PVaultContractAmino;
}
export interface PVaultContractSDKType {
  contract_address: string;
  asset_id: string;
  underlying_asset: string;
  c_asset_denom: string;
  accept_underlying_asset: boolean;
  accept_c_asset: boolean;
  reward_per_dollar: string;
}
function createBasePVaultContract(): PVaultContract {
  return {
    contractAddress: "",
    assetId: "",
    underlyingAsset: "",
    cAssetDenom: "",
    acceptUnderlyingAsset: false,
    acceptCAsset: false,
    rewardPerDollar: ""
  };
}
export const PVaultContract = {
  typeUrl: "/pryzmatics.pvault.PVaultContract",
  is(o: any): o is PVaultContract {
    return o && (o.$typeUrl === PVaultContract.typeUrl || typeof o.contractAddress === "string" && typeof o.assetId === "string" && typeof o.underlyingAsset === "string" && typeof o.cAssetDenom === "string" && typeof o.acceptUnderlyingAsset === "boolean" && typeof o.acceptCAsset === "boolean" && typeof o.rewardPerDollar === "string");
  },
  isSDK(o: any): o is PVaultContractSDKType {
    return o && (o.$typeUrl === PVaultContract.typeUrl || typeof o.contract_address === "string" && typeof o.asset_id === "string" && typeof o.underlying_asset === "string" && typeof o.c_asset_denom === "string" && typeof o.accept_underlying_asset === "boolean" && typeof o.accept_c_asset === "boolean" && typeof o.reward_per_dollar === "string");
  },
  isAmino(o: any): o is PVaultContractAmino {
    return o && (o.$typeUrl === PVaultContract.typeUrl || typeof o.contract_address === "string" && typeof o.asset_id === "string" && typeof o.underlying_asset === "string" && typeof o.c_asset_denom === "string" && typeof o.accept_underlying_asset === "boolean" && typeof o.accept_c_asset === "boolean" && typeof o.reward_per_dollar === "string");
  },
  encode(message: PVaultContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.underlyingAsset !== "") {
      writer.uint32(26).string(message.underlyingAsset);
    }
    if (message.cAssetDenom !== "") {
      writer.uint32(34).string(message.cAssetDenom);
    }
    if (message.acceptUnderlyingAsset === true) {
      writer.uint32(40).bool(message.acceptUnderlyingAsset);
    }
    if (message.acceptCAsset === true) {
      writer.uint32(48).bool(message.acceptCAsset);
    }
    if (message.rewardPerDollar !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.rewardPerDollar, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PVaultContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePVaultContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        case 3:
          message.underlyingAsset = reader.string();
          break;
        case 4:
          message.cAssetDenom = reader.string();
          break;
        case 5:
          message.acceptUnderlyingAsset = reader.bool();
          break;
        case 6:
          message.acceptCAsset = reader.bool();
          break;
        case 7:
          message.rewardPerDollar = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PVaultContract {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      underlyingAsset: isSet(object.underlyingAsset) ? String(object.underlyingAsset) : "",
      cAssetDenom: isSet(object.cAssetDenom) ? String(object.cAssetDenom) : "",
      acceptUnderlyingAsset: isSet(object.acceptUnderlyingAsset) ? Boolean(object.acceptUnderlyingAsset) : false,
      acceptCAsset: isSet(object.acceptCAsset) ? Boolean(object.acceptCAsset) : false,
      rewardPerDollar: isSet(object.rewardPerDollar) ? String(object.rewardPerDollar) : ""
    };
  },
  toJSON(message: PVaultContract): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.underlyingAsset !== undefined && (obj.underlyingAsset = message.underlyingAsset);
    message.cAssetDenom !== undefined && (obj.cAssetDenom = message.cAssetDenom);
    message.acceptUnderlyingAsset !== undefined && (obj.acceptUnderlyingAsset = message.acceptUnderlyingAsset);
    message.acceptCAsset !== undefined && (obj.acceptCAsset = message.acceptCAsset);
    message.rewardPerDollar !== undefined && (obj.rewardPerDollar = message.rewardPerDollar);
    return obj;
  },
  fromPartial(object: Partial<PVaultContract>): PVaultContract {
    const message = createBasePVaultContract();
    message.contractAddress = object.contractAddress ?? "";
    message.assetId = object.assetId ?? "";
    message.underlyingAsset = object.underlyingAsset ?? "";
    message.cAssetDenom = object.cAssetDenom ?? "";
    message.acceptUnderlyingAsset = object.acceptUnderlyingAsset ?? false;
    message.acceptCAsset = object.acceptCAsset ?? false;
    message.rewardPerDollar = object.rewardPerDollar ?? "";
    return message;
  },
  fromAmino(object: PVaultContractAmino): PVaultContract {
    const message = createBasePVaultContract();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.asset_id !== undefined && object.asset_id !== null) {
      message.assetId = object.asset_id;
    }
    if (object.underlying_asset !== undefined && object.underlying_asset !== null) {
      message.underlyingAsset = object.underlying_asset;
    }
    if (object.c_asset_denom !== undefined && object.c_asset_denom !== null) {
      message.cAssetDenom = object.c_asset_denom;
    }
    if (object.accept_underlying_asset !== undefined && object.accept_underlying_asset !== null) {
      message.acceptUnderlyingAsset = object.accept_underlying_asset;
    }
    if (object.accept_c_asset !== undefined && object.accept_c_asset !== null) {
      message.acceptCAsset = object.accept_c_asset;
    }
    if (object.reward_per_dollar !== undefined && object.reward_per_dollar !== null) {
      message.rewardPerDollar = object.reward_per_dollar;
    }
    return message;
  },
  toAmino(message: PVaultContract, useInterfaces: boolean = true): PVaultContractAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.asset_id = message.assetId === "" ? undefined : message.assetId;
    obj.underlying_asset = message.underlyingAsset === "" ? undefined : message.underlyingAsset;
    obj.c_asset_denom = message.cAssetDenom === "" ? undefined : message.cAssetDenom;
    obj.accept_underlying_asset = message.acceptUnderlyingAsset === false ? undefined : message.acceptUnderlyingAsset;
    obj.accept_c_asset = message.acceptCAsset === false ? undefined : message.acceptCAsset;
    obj.reward_per_dollar = padDecimal(message.rewardPerDollar) === "" ? undefined : padDecimal(message.rewardPerDollar);
    return obj;
  },
  fromAminoMsg(object: PVaultContractAminoMsg): PVaultContract {
    return PVaultContract.fromAmino(object.value);
  },
  fromProtoMsg(message: PVaultContractProtoMsg, useInterfaces: boolean = true): PVaultContract {
    return PVaultContract.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PVaultContract): Uint8Array {
    return PVaultContract.encode(message).finish();
  },
  toProtoMsg(message: PVaultContract): PVaultContractProtoMsg {
    return {
      typeUrl: "/pryzmatics.pvault.PVaultContract",
      value: PVaultContract.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PVaultContract.typeUrl, PVaultContract);