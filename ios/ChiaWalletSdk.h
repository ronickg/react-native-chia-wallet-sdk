#ifdef __cplusplus
#import "react-native-chia-wallet-sdk.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNChiaWalletSdkSpec.h"

@interface ChiaWalletSdk : NSObject <NativeChiaWalletSdkSpec>
#else
#import <React/RCTBridgeModule.h>

@interface ChiaWalletSdk : NSObject <RCTBridgeModule>
#endif

@end
