package com.ming.app

import android.content.Context
import com.facebook.flipper.android.AndroidFlipperClient
import com.facebook.flipper.plugins.inspector.DescriptorMapping
import com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin
import com.facebook.flipper.plugins.network.FlipperOkhttpInterceptor
import com.facebook.flipper.plugins.network.NetworkFlipperPlugin
import com.facebook.react.modules.network.NetworkingModule
import com.facebook.flipper.android.utils.FlipperUtils
import okhttp3.OkHttpClient

object ReactNativeFlipper {
  fun initializeFlipper(context: Context) {
    if (!FlipperUtils.shouldEnableFlipper(context)) return

    val client = AndroidFlipperClient.getInstance(context)

    val inspectorPlugin = InspectorFlipperPlugin(context, DescriptorMapping.withDefaults())
    client.addPlugin(inspectorPlugin)

    val networkFlipperPlugin = NetworkFlipperPlugin()
    NetworkingModule.setCustomClientBuilder(
      object : NetworkingModule.CustomClientBuilder {
        override fun apply(builder: OkHttpClient.Builder) {
          builder.addNetworkInterceptor(FlipperOkhttpInterceptor(networkFlipperPlugin))
        }
      }
    )
    client.addPlugin(networkFlipperPlugin)

    client.start()
  }
}
