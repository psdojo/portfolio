---
title: OpenLiteSpeed - PHP 8.3 JIT Disabled Despite Correct Configuration
date: 2026-10-01
featured: true
draft: false
---

### Problem

PHP 8.3 on an OpenLiteSpeed server had JIT configured correctly, but the runtime reported:

```text
JIT = Disabled
opcache.jit = tracing
opcac
he.jit_buffer_size = 16M
```

### Environment

* Debian 13
* OpenLiteSpeed 1.9.2
* LSPHP 8.3.33
* OPcache
* ionCube Loader 15.5.1

### Investigation

I reproduced the environment and verified the **actual web PHP configuration**, rather than relying on the CLI configuration.

With ionCube loaded:

```text
JIT = Disabled
enabled = false
on = false
```

I then isolated the loaded ionCube extension by disabling its `.ini` file and restarting the LSPHP workers.

### Resolution

After disabling ionCube:

```text
JIT = On
enabled = true
on = true
```

### Result

The A/B test showed:

```text
ionCube enabled  → JIT disabled
ionCube disabled → JIT enabled
```

This confirmed an **ionCube/JIT compatibility conflict in this PHP 8.3 environment**.

### What this demonstrated

The investigation involved configuration discovery, runtime verification, extension isolation, process management, and controlled root-cause testing.
