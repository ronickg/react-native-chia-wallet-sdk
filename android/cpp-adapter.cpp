#include <jni.h>
#include "react-native-chia-wallet-sdk.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_chiawalletsdk_ChiaWalletSdkModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return chiawalletsdk::multiply(a, b);
}
