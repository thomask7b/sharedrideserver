package org.flotho.sharedrideserver.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.web.SecurityFilterChain


@Configuration
@EnableWebSecurity
class SecurityConfig(
    private val userDetailsServiceImpl: UserDetailsServiceImpl
) {
    @Bean
    fun filterChain(http: HttpSecurity): SecurityFilterChain {
        http.authorizeRequests()
            .antMatchers("/users/create").anonymous()
            .antMatchers("/users/**").authenticated()
            .antMatchers("/sharedride-ws-endpoint").authenticated()
            .anyRequest().permitAll()
            .and()
            .formLogin().loginPage("/login-view").loginProcessingUrl("/login")
            .usernameParameter("name").passwordParameter("password")
        return http.userDetailsService(userDetailsServiceImpl)
            .csrf().disable().build()//TODO activer crsf
    }

    @Bean
    @Throws(Exception::class)
    fun authenticationManager(authenticationConfiguration: AuthenticationConfiguration): AuthenticationManager? {
        return authenticationConfiguration.authenticationManager
    }
}