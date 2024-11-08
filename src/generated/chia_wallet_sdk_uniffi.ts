// This file was autogenerated by some hot garbage in the `uniffi-bindgen-react-native` crate.
// Trust me, you don't want to mess with it!
import nativeModule, {
  type UniffiRustFutureContinuationCallback,
  type UniffiForeignFutureFree,
  type UniffiCallbackInterfaceFree,
  type UniffiForeignFuture,
  type UniffiForeignFutureStructU8,
  type UniffiForeignFutureCompleteU8,
  type UniffiForeignFutureStructI8,
  type UniffiForeignFutureCompleteI8,
  type UniffiForeignFutureStructU16,
  type UniffiForeignFutureCompleteU16,
  type UniffiForeignFutureStructI16,
  type UniffiForeignFutureCompleteI16,
  type UniffiForeignFutureStructU32,
  type UniffiForeignFutureCompleteU32,
  type UniffiForeignFutureStructI32,
  type UniffiForeignFutureCompleteI32,
  type UniffiForeignFutureStructU64,
  type UniffiForeignFutureCompleteU64,
  type UniffiForeignFutureStructI64,
  type UniffiForeignFutureCompleteI64,
  type UniffiForeignFutureStructF32,
  type UniffiForeignFutureCompleteF32,
  type UniffiForeignFutureStructF64,
  type UniffiForeignFutureCompleteF64,
  type UniffiForeignFutureStructPointer,
  type UniffiForeignFutureCompletePointer,
  type UniffiForeignFutureStructRustBuffer,
  type UniffiForeignFutureCompleteRustBuffer,
  type UniffiForeignFutureStructVoid,
  type UniffiForeignFutureCompleteVoid,
} from './chia_wallet_sdk_uniffi-ffi';
import {
  type FfiConverter,
  AbstractFfiConverterArrayBuffer,
  FfiConverterArrayBuffer,
  FfiConverterBool,
  FfiConverterInt32,
  FfiConverterOptional,
  FfiConverterUInt32,
  RustBuffer,
  UniffiError,
  UniffiInternalError,
  rustCall,
  rustCallWithError,
  uniffiTypeNameSymbol,
  variantOrdinalSymbol,
} from 'uniffi-bindgen-react-native';

// Get converters from the other files, if any.

const uniffiIsDebug = process.env.uniffiIsDebug !== 'production' || false;
// Public interface members begin here.

export function compareBytes(a: ArrayBuffer, b: ArrayBuffer): boolean {
  return FfiConverterBool.lift(
    rustCall(
      /*caller:*/ (callStatus) => {
        return nativeModule().uniffi_chia_wallet_sdk_uniffi_fn_func_compare_bytes(
          FfiConverterArrayBuffer.lower(a),
          FfiConverterArrayBuffer.lower(b),
          callStatus
        );
      },
      /*liftString:*/ FfiConverterString.lift
    )
  );
}
export function fromHex(hex: string): ArrayBuffer /*throws*/ {
  return FfiConverterArrayBuffer.lift(
    rustCallWithError(
      /*liftError:*/ FfiConverterTypeGeneralError.lift.bind(
        FfiConverterTypeGeneralError
      ),
      /*caller:*/ (callStatus) => {
        return nativeModule().uniffi_chia_wallet_sdk_uniffi_fn_func_from_hex(
          FfiConverterString.lower(hex),
          callStatus
        );
      },
      /*liftString:*/ FfiConverterString.lift
    )
  );
}
export function fromHexRaw(hex: string): ArrayBuffer /*throws*/ {
  return FfiConverterArrayBuffer.lift(
    rustCallWithError(
      /*liftError:*/ FfiConverterTypeGeneralError.lift.bind(
        FfiConverterTypeGeneralError
      ),
      /*caller:*/ (callStatus) => {
        return nativeModule().uniffi_chia_wallet_sdk_uniffi_fn_func_from_hex_raw(
          FfiConverterString.lower(hex),
          callStatus
        );
      },
      /*liftString:*/ FfiConverterString.lift
    )
  );
}
export function generateMnemonic(wordCount: /*u32*/ number): string /*throws*/ {
  return FfiConverterString.lift(
    rustCallWithError(
      /*liftError:*/ FfiConverterTypeBip39Error.lift.bind(
        FfiConverterTypeBip39Error
      ),
      /*caller:*/ (callStatus) => {
        return nativeModule().uniffi_chia_wallet_sdk_uniffi_fn_func_generate_mnemonic(
          FfiConverterUInt32.lower(wordCount),
          callStatus
        );
      },
      /*liftString:*/ FfiConverterString.lift
    )
  );
}
export function mnemonicFromEntropy(entropy: ArrayBuffer): string /*throws*/ {
  return FfiConverterString.lift(
    rustCallWithError(
      /*liftError:*/ FfiConverterTypeBip39Error.lift.bind(
        FfiConverterTypeBip39Error
      ),
      /*caller:*/ (callStatus) => {
        return nativeModule().uniffi_chia_wallet_sdk_uniffi_fn_func_mnemonic_from_entropy(
          FfiConverterArrayBuffer.lower(entropy),
          callStatus
        );
      },
      /*liftString:*/ FfiConverterString.lift
    )
  );
}
export function mnemonicToEntropy(phrase: string): ArrayBuffer /*throws*/ {
  return FfiConverterArrayBuffer.lift(
    rustCallWithError(
      /*liftError:*/ FfiConverterTypeBip39Error.lift.bind(
        FfiConverterTypeBip39Error
      ),
      /*caller:*/ (callStatus) => {
        return nativeModule().uniffi_chia_wallet_sdk_uniffi_fn_func_mnemonic_to_entropy(
          FfiConverterString.lower(phrase),
          callStatus
        );
      },
      /*liftString:*/ FfiConverterString.lift
    )
  );
}
export function mnemonicToSeed(
  phrase: string,
  passphrase: string | undefined
): ArrayBuffer /*throws*/ {
  return FfiConverterArrayBuffer.lift(
    rustCallWithError(
      /*liftError:*/ FfiConverterTypeBip39Error.lift.bind(
        FfiConverterTypeBip39Error
      ),
      /*caller:*/ (callStatus) => {
        return nativeModule().uniffi_chia_wallet_sdk_uniffi_fn_func_mnemonic_to_seed(
          FfiConverterString.lower(phrase),
          FfiConverterOptionalString.lower(passphrase),
          callStatus
        );
      },
      /*liftString:*/ FfiConverterString.lift
    )
  );
}
export function sha256(bytes: ArrayBuffer): ArrayBuffer /*throws*/ {
  return FfiConverterArrayBuffer.lift(
    rustCallWithError(
      /*liftError:*/ FfiConverterTypeGeneralError.lift.bind(
        FfiConverterTypeGeneralError
      ),
      /*caller:*/ (callStatus) => {
        return nativeModule().uniffi_chia_wallet_sdk_uniffi_fn_func_sha256(
          FfiConverterArrayBuffer.lower(bytes),
          callStatus
        );
      },
      /*liftString:*/ FfiConverterString.lift
    )
  );
}
export function toHex(bytes: ArrayBuffer): string {
  return FfiConverterString.lift(
    rustCall(
      /*caller:*/ (callStatus) => {
        return nativeModule().uniffi_chia_wallet_sdk_uniffi_fn_func_to_hex(
          FfiConverterArrayBuffer.lower(bytes),
          callStatus
        );
      },
      /*liftString:*/ FfiConverterString.lift
    )
  );
}
export function validateMnemonic(phrase: string): boolean /*throws*/ {
  return FfiConverterBool.lift(
    rustCallWithError(
      /*liftError:*/ FfiConverterTypeBip39Error.lift.bind(
        FfiConverterTypeBip39Error
      ),
      /*caller:*/ (callStatus) => {
        return nativeModule().uniffi_chia_wallet_sdk_uniffi_fn_func_validate_mnemonic(
          FfiConverterString.lower(phrase),
          callStatus
        );
      },
      /*liftString:*/ FfiConverterString.lift
    )
  );
}

const stringToArrayBuffer = (s: string): ArrayBuffer =>
  rustCall((status) =>
    nativeModule().uniffi_internal_fn_func_ffi__string_to_arraybuffer(s, status)
  );

const arrayBufferToString = (ab: ArrayBuffer): string =>
  rustCall((status) =>
    nativeModule().uniffi_internal_fn_func_ffi__arraybuffer_to_string(
      ab,
      status
    )
  );

const stringByteLength = (s: string): number =>
  rustCall((status) =>
    nativeModule().uniffi_internal_fn_func_ffi__string_to_byte_length(s, status)
  );

const FfiConverterString = (() => {
  const lengthConverter = FfiConverterInt32;
  type TypeName = string;
  class FFIConverter implements FfiConverter<ArrayBuffer, TypeName> {
    lift(value: ArrayBuffer): TypeName {
      return arrayBufferToString(value);
    }
    lower(value: TypeName): ArrayBuffer {
      return stringToArrayBuffer(value);
    }
    read(from: RustBuffer): TypeName {
      const length = lengthConverter.read(from);
      const bytes = from.readBytes(length);
      return arrayBufferToString(bytes);
    }
    write(value: TypeName, into: RustBuffer): void {
      const buffer = stringToArrayBuffer(value);
      const numBytes = buffer.byteLength;
      lengthConverter.write(numBytes, into);
      into.writeBytes(buffer);
    }
    allocationSize(value: TypeName): number {
      return lengthConverter.allocationSize(0) + stringByteLength(value);
    }
  }

  return new FFIConverter();
})();

// Error type: Bip39Error

// Enum: Bip39Error
export enum Bip39Error_Tags {
  BadWordCount = 'BadWordCount',
  UnknownWord = 'UnknownWord',
  BadEntropyBitCount = 'BadEntropyBitCount',
  InvalidChecksum = 'InvalidChecksum',
  AmbiguousLanguages = 'AmbiguousLanguages',
  GenerationFailed = 'GenerationFailed',
  ParseFailed = 'ParseFailed',
}
export const Bip39Error = (() => {
  type BadWordCount__interface = {
    tag: Bip39Error_Tags.BadWordCount;
    inner: Readonly<[/*u32*/ number]>;
  };

  class BadWordCount_ extends UniffiError implements BadWordCount__interface {
    /**
     * @private
     * This field is private and should not be used, use `tag` instead.
     */
    readonly [uniffiTypeNameSymbol] = 'Bip39Error';
    readonly tag = Bip39Error_Tags.BadWordCount;
    readonly inner: Readonly<[/*u32*/ number]>;
    constructor(v0: /*u32*/ number) {
      super('Bip39Error', 'BadWordCount');
      this.inner = Object.freeze([v0]);
    }

    static new(v0: /*u32*/ number): BadWordCount_ {
      return new BadWordCount_(v0);
    }

    static instanceOf(obj: any): obj is BadWordCount_ {
      return obj.tag === Bip39Error_Tags.BadWordCount;
    }

    static hasInner(obj: any): obj is BadWordCount_ {
      return BadWordCount_.instanceOf(obj);
    }

    static getInner(obj: BadWordCount_): Readonly<[/*u32*/ number]> {
      return obj.inner;
    }
  }

  type UnknownWord__interface = {
    tag: Bip39Error_Tags.UnknownWord;
    inner: Readonly<[/*u32*/ number]>;
  };

  class UnknownWord_ extends UniffiError implements UnknownWord__interface {
    /**
     * @private
     * This field is private and should not be used, use `tag` instead.
     */
    readonly [uniffiTypeNameSymbol] = 'Bip39Error';
    readonly tag = Bip39Error_Tags.UnknownWord;
    readonly inner: Readonly<[/*u32*/ number]>;
    constructor(v0: /*u32*/ number) {
      super('Bip39Error', 'UnknownWord');
      this.inner = Object.freeze([v0]);
    }

    static new(v0: /*u32*/ number): UnknownWord_ {
      return new UnknownWord_(v0);
    }

    static instanceOf(obj: any): obj is UnknownWord_ {
      return obj.tag === Bip39Error_Tags.UnknownWord;
    }

    static hasInner(obj: any): obj is UnknownWord_ {
      return UnknownWord_.instanceOf(obj);
    }

    static getInner(obj: UnknownWord_): Readonly<[/*u32*/ number]> {
      return obj.inner;
    }
  }

  type BadEntropyBitCount__interface = {
    tag: Bip39Error_Tags.BadEntropyBitCount;
    inner: Readonly<[/*u32*/ number]>;
  };

  class BadEntropyBitCount_
    extends UniffiError
    implements BadEntropyBitCount__interface
  {
    /**
     * @private
     * This field is private and should not be used, use `tag` instead.
     */
    readonly [uniffiTypeNameSymbol] = 'Bip39Error';
    readonly tag = Bip39Error_Tags.BadEntropyBitCount;
    readonly inner: Readonly<[/*u32*/ number]>;
    constructor(v0: /*u32*/ number) {
      super('Bip39Error', 'BadEntropyBitCount');
      this.inner = Object.freeze([v0]);
    }

    static new(v0: /*u32*/ number): BadEntropyBitCount_ {
      return new BadEntropyBitCount_(v0);
    }

    static instanceOf(obj: any): obj is BadEntropyBitCount_ {
      return obj.tag === Bip39Error_Tags.BadEntropyBitCount;
    }

    static hasInner(obj: any): obj is BadEntropyBitCount_ {
      return BadEntropyBitCount_.instanceOf(obj);
    }

    static getInner(obj: BadEntropyBitCount_): Readonly<[/*u32*/ number]> {
      return obj.inner;
    }
  }

  type InvalidChecksum__interface = {
    tag: Bip39Error_Tags.InvalidChecksum;
  };

  class InvalidChecksum_
    extends UniffiError
    implements InvalidChecksum__interface
  {
    /**
     * @private
     * This field is private and should not be used, use `tag` instead.
     */
    readonly [uniffiTypeNameSymbol] = 'Bip39Error';
    readonly tag = Bip39Error_Tags.InvalidChecksum;
    constructor() {
      super('Bip39Error', 'InvalidChecksum');
    }

    static new(): InvalidChecksum_ {
      return new InvalidChecksum_();
    }

    static instanceOf(obj: any): obj is InvalidChecksum_ {
      return obj.tag === Bip39Error_Tags.InvalidChecksum;
    }

    static hasInner(obj: any): obj is InvalidChecksum_ {
      return false;
    }
  }

  type AmbiguousLanguages__interface = {
    tag: Bip39Error_Tags.AmbiguousLanguages;
  };

  class AmbiguousLanguages_
    extends UniffiError
    implements AmbiguousLanguages__interface
  {
    /**
     * @private
     * This field is private and should not be used, use `tag` instead.
     */
    readonly [uniffiTypeNameSymbol] = 'Bip39Error';
    readonly tag = Bip39Error_Tags.AmbiguousLanguages;
    constructor() {
      super('Bip39Error', 'AmbiguousLanguages');
    }

    static new(): AmbiguousLanguages_ {
      return new AmbiguousLanguages_();
    }

    static instanceOf(obj: any): obj is AmbiguousLanguages_ {
      return obj.tag === Bip39Error_Tags.AmbiguousLanguages;
    }

    static hasInner(obj: any): obj is AmbiguousLanguages_ {
      return false;
    }
  }

  type GenerationFailed__interface = {
    tag: Bip39Error_Tags.GenerationFailed;
  };

  class GenerationFailed_
    extends UniffiError
    implements GenerationFailed__interface
  {
    /**
     * @private
     * This field is private and should not be used, use `tag` instead.
     */
    readonly [uniffiTypeNameSymbol] = 'Bip39Error';
    readonly tag = Bip39Error_Tags.GenerationFailed;
    constructor() {
      super('Bip39Error', 'GenerationFailed');
    }

    static new(): GenerationFailed_ {
      return new GenerationFailed_();
    }

    static instanceOf(obj: any): obj is GenerationFailed_ {
      return obj.tag === Bip39Error_Tags.GenerationFailed;
    }

    static hasInner(obj: any): obj is GenerationFailed_ {
      return false;
    }
  }

  type ParseFailed__interface = {
    tag: Bip39Error_Tags.ParseFailed;
  };

  class ParseFailed_ extends UniffiError implements ParseFailed__interface {
    /**
     * @private
     * This field is private and should not be used, use `tag` instead.
     */
    readonly [uniffiTypeNameSymbol] = 'Bip39Error';
    readonly tag = Bip39Error_Tags.ParseFailed;
    constructor() {
      super('Bip39Error', 'ParseFailed');
    }

    static new(): ParseFailed_ {
      return new ParseFailed_();
    }

    static instanceOf(obj: any): obj is ParseFailed_ {
      return obj.tag === Bip39Error_Tags.ParseFailed;
    }

    static hasInner(obj: any): obj is ParseFailed_ {
      return false;
    }
  }

  function instanceOf(obj: any): obj is Bip39Error {
    return obj[uniffiTypeNameSymbol] === 'Bip39Error';
  }

  return Object.freeze({
    instanceOf,
    BadWordCount: BadWordCount_,
    UnknownWord: UnknownWord_,
    BadEntropyBitCount: BadEntropyBitCount_,
    InvalidChecksum: InvalidChecksum_,
    AmbiguousLanguages: AmbiguousLanguages_,
    GenerationFailed: GenerationFailed_,
    ParseFailed: ParseFailed_,
  });
})();

export type Bip39Error = InstanceType<
  (typeof Bip39Error)[keyof Omit<typeof Bip39Error, 'instanceOf'>]
>;

// FfiConverter for enum Bip39Error
const FfiConverterTypeBip39Error = (() => {
  const ordinalConverter = FfiConverterInt32;
  type TypeName = Bip39Error;
  class FFIConverter extends AbstractFfiConverterArrayBuffer<TypeName> {
    read(from: RustBuffer): TypeName {
      switch (ordinalConverter.read(from)) {
        case 1:
          return new Bip39Error.BadWordCount(FfiConverterUInt32.read(from));
        case 2:
          return new Bip39Error.UnknownWord(FfiConverterUInt32.read(from));
        case 3:
          return new Bip39Error.BadEntropyBitCount(
            FfiConverterUInt32.read(from)
          );
        case 4:
          return new Bip39Error.InvalidChecksum();
        case 5:
          return new Bip39Error.AmbiguousLanguages();
        case 6:
          return new Bip39Error.GenerationFailed();
        case 7:
          return new Bip39Error.ParseFailed();
        default:
          throw new UniffiInternalError.UnexpectedEnumCase();
      }
    }
    write(value: TypeName, into: RustBuffer): void {
      switch (value.tag) {
        case Bip39Error_Tags.BadWordCount: {
          ordinalConverter.write(1, into);
          const inner = value.inner;
          FfiConverterUInt32.write(inner[0], into);
          return;
        }
        case Bip39Error_Tags.UnknownWord: {
          ordinalConverter.write(2, into);
          const inner = value.inner;
          FfiConverterUInt32.write(inner[0], into);
          return;
        }
        case Bip39Error_Tags.BadEntropyBitCount: {
          ordinalConverter.write(3, into);
          const inner = value.inner;
          FfiConverterUInt32.write(inner[0], into);
          return;
        }
        case Bip39Error_Tags.InvalidChecksum: {
          ordinalConverter.write(4, into);
          return;
        }
        case Bip39Error_Tags.AmbiguousLanguages: {
          ordinalConverter.write(5, into);
          return;
        }
        case Bip39Error_Tags.GenerationFailed: {
          ordinalConverter.write(6, into);
          return;
        }
        case Bip39Error_Tags.ParseFailed: {
          ordinalConverter.write(7, into);
          return;
        }
        default:
          // Throwing from here means that Bip39Error_Tags hasn't matched an ordinal.
          throw new UniffiInternalError.UnexpectedEnumCase();
      }
    }
    allocationSize(value: TypeName): number {
      switch (value.tag) {
        case Bip39Error_Tags.BadWordCount: {
          const inner = value.inner;
          let size = ordinalConverter.allocationSize(1);
          size += FfiConverterUInt32.allocationSize(inner[0]);
          return size;
        }
        case Bip39Error_Tags.UnknownWord: {
          const inner = value.inner;
          let size = ordinalConverter.allocationSize(2);
          size += FfiConverterUInt32.allocationSize(inner[0]);
          return size;
        }
        case Bip39Error_Tags.BadEntropyBitCount: {
          const inner = value.inner;
          let size = ordinalConverter.allocationSize(3);
          size += FfiConverterUInt32.allocationSize(inner[0]);
          return size;
        }
        case Bip39Error_Tags.InvalidChecksum: {
          return ordinalConverter.allocationSize(4);
        }
        case Bip39Error_Tags.AmbiguousLanguages: {
          return ordinalConverter.allocationSize(5);
        }
        case Bip39Error_Tags.GenerationFailed: {
          return ordinalConverter.allocationSize(6);
        }
        case Bip39Error_Tags.ParseFailed: {
          return ordinalConverter.allocationSize(7);
        }
        default:
          throw new UniffiInternalError.UnexpectedEnumCase();
      }
    }
  }
  return new FFIConverter();
})();

// Error type: GeneralError

// Enum: GeneralError
export enum GeneralError_Tags {
  InvalidInput = 'InvalidInput',
}
export const GeneralError = (() => {
  type InvalidInput__interface = {
    tag: GeneralError_Tags.InvalidInput;
    inner: Readonly<[string]>;
  };

  class InvalidInput_ extends UniffiError implements InvalidInput__interface {
    /**
     * @private
     * This field is private and should not be used, use `tag` instead.
     */
    readonly [uniffiTypeNameSymbol] = 'GeneralError';
    readonly tag = GeneralError_Tags.InvalidInput;
    readonly inner: Readonly<[string]>;
    constructor(v0: string) {
      super('GeneralError', 'InvalidInput');
      this.inner = Object.freeze([v0]);
    }

    static new(v0: string): InvalidInput_ {
      return new InvalidInput_(v0);
    }

    static instanceOf(obj: any): obj is InvalidInput_ {
      return obj.tag === GeneralError_Tags.InvalidInput;
    }

    static hasInner(obj: any): obj is InvalidInput_ {
      return InvalidInput_.instanceOf(obj);
    }

    static getInner(obj: InvalidInput_): Readonly<[string]> {
      return obj.inner;
    }
  }

  function instanceOf(obj: any): obj is GeneralError {
    return obj[uniffiTypeNameSymbol] === 'GeneralError';
  }

  return Object.freeze({
    instanceOf,
    InvalidInput: InvalidInput_,
  });
})();

export type GeneralError = InstanceType<
  (typeof GeneralError)[keyof Omit<typeof GeneralError, 'instanceOf'>]
>;

// FfiConverter for enum GeneralError
const FfiConverterTypeGeneralError = (() => {
  const ordinalConverter = FfiConverterInt32;
  type TypeName = GeneralError;
  class FFIConverter extends AbstractFfiConverterArrayBuffer<TypeName> {
    read(from: RustBuffer): TypeName {
      switch (ordinalConverter.read(from)) {
        case 1:
          return new GeneralError.InvalidInput(FfiConverterString.read(from));
        default:
          throw new UniffiInternalError.UnexpectedEnumCase();
      }
    }
    write(value: TypeName, into: RustBuffer): void {
      switch (value.tag) {
        case GeneralError_Tags.InvalidInput: {
          ordinalConverter.write(1, into);
          const inner = value.inner;
          FfiConverterString.write(inner[0], into);
          return;
        }
        default:
          // Throwing from here means that GeneralError_Tags hasn't matched an ordinal.
          throw new UniffiInternalError.UnexpectedEnumCase();
      }
    }
    allocationSize(value: TypeName): number {
      switch (value.tag) {
        case GeneralError_Tags.InvalidInput: {
          const inner = value.inner;
          let size = ordinalConverter.allocationSize(1);
          size += FfiConverterString.allocationSize(inner[0]);
          return size;
        }
        default:
          throw new UniffiInternalError.UnexpectedEnumCase();
      }
    }
  }
  return new FFIConverter();
})();

// FfiConverter for string | undefined
const FfiConverterOptionalString = new FfiConverterOptional(FfiConverterString);

/**
 * This should be called before anything else.
 *
 * It is likely that this is being done for you by the library's `index.ts`.
 *
 * It checks versions of uniffi between when the Rust scaffolding was generated
 * and when the bindings were generated.
 *
 * It also initializes the machinery to enable Rust to talk back to Javascript.
 */
function uniffiEnsureInitialized() {
  // Get the bindings contract version from our ComponentInterface
  const bindingsContractVersion = 26;
  // Get the scaffolding contract version by calling the into the dylib
  const scaffoldingContractVersion =
    nativeModule().ffi_chia_wallet_sdk_uniffi_uniffi_contract_version();
  if (bindingsContractVersion !== scaffoldingContractVersion) {
    throw new UniffiInternalError.ContractVersionMismatch(
      scaffoldingContractVersion,
      bindingsContractVersion
    );
  }
  if (
    nativeModule().uniffi_chia_wallet_sdk_uniffi_checksum_func_compare_bytes() !==
    54096
  ) {
    throw new UniffiInternalError.ApiChecksumMismatch(
      'uniffi_chia_wallet_sdk_uniffi_checksum_func_compare_bytes'
    );
  }
  if (
    nativeModule().uniffi_chia_wallet_sdk_uniffi_checksum_func_from_hex() !==
    56165
  ) {
    throw new UniffiInternalError.ApiChecksumMismatch(
      'uniffi_chia_wallet_sdk_uniffi_checksum_func_from_hex'
    );
  }
  if (
    nativeModule().uniffi_chia_wallet_sdk_uniffi_checksum_func_from_hex_raw() !==
    47704
  ) {
    throw new UniffiInternalError.ApiChecksumMismatch(
      'uniffi_chia_wallet_sdk_uniffi_checksum_func_from_hex_raw'
    );
  }
  if (
    nativeModule().uniffi_chia_wallet_sdk_uniffi_checksum_func_generate_mnemonic() !==
    17448
  ) {
    throw new UniffiInternalError.ApiChecksumMismatch(
      'uniffi_chia_wallet_sdk_uniffi_checksum_func_generate_mnemonic'
    );
  }
  if (
    nativeModule().uniffi_chia_wallet_sdk_uniffi_checksum_func_mnemonic_from_entropy() !==
    64110
  ) {
    throw new UniffiInternalError.ApiChecksumMismatch(
      'uniffi_chia_wallet_sdk_uniffi_checksum_func_mnemonic_from_entropy'
    );
  }
  if (
    nativeModule().uniffi_chia_wallet_sdk_uniffi_checksum_func_mnemonic_to_entropy() !==
    3284
  ) {
    throw new UniffiInternalError.ApiChecksumMismatch(
      'uniffi_chia_wallet_sdk_uniffi_checksum_func_mnemonic_to_entropy'
    );
  }
  if (
    nativeModule().uniffi_chia_wallet_sdk_uniffi_checksum_func_mnemonic_to_seed() !==
    44481
  ) {
    throw new UniffiInternalError.ApiChecksumMismatch(
      'uniffi_chia_wallet_sdk_uniffi_checksum_func_mnemonic_to_seed'
    );
  }
  if (
    nativeModule().uniffi_chia_wallet_sdk_uniffi_checksum_func_sha256() !==
    19822
  ) {
    throw new UniffiInternalError.ApiChecksumMismatch(
      'uniffi_chia_wallet_sdk_uniffi_checksum_func_sha256'
    );
  }
  if (
    nativeModule().uniffi_chia_wallet_sdk_uniffi_checksum_func_to_hex() !==
    43694
  ) {
    throw new UniffiInternalError.ApiChecksumMismatch(
      'uniffi_chia_wallet_sdk_uniffi_checksum_func_to_hex'
    );
  }
  if (
    nativeModule().uniffi_chia_wallet_sdk_uniffi_checksum_func_validate_mnemonic() !==
    10748
  ) {
    throw new UniffiInternalError.ApiChecksumMismatch(
      'uniffi_chia_wallet_sdk_uniffi_checksum_func_validate_mnemonic'
    );
  }
}

export default Object.freeze({
  initialize: uniffiEnsureInitialized,
});
