package org.flotho.sharedrideserver

import io.klogging.config.ANSI_CONSOLE
import io.klogging.config.loggingConfiguration
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class SharedrideserverApplication

fun main(args: Array<String>) {
    loggingConfiguration { ANSI_CONSOLE() }
    runApplication<SharedrideserverApplication>(*args)
}
