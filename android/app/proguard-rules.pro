# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# ZebraScanner 관련 코드 유지
-keep class nl.nextup.ZebraScanner.** { *; }
-keep class com.symbol.emdk.** { *; }
-keep class h8.b { *; }

# React Native 관련 코드 유지
-keep class com.facebook.react.** { *; }
-keep class com.facebook.** { *; }

# Java Reflection 문제 방지
-keepattributes *Annotation*
-keepclassmembers class * { @com.facebook.proguard.annotations.DoNotStrip *; }
-dontwarn com.facebook.react.**
-dontwarn nl.nextup.ZebraScanner.**
-dontwarn com.symbol.emdk.**