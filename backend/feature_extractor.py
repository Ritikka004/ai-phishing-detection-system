from urllib.parse import urlparse

def extract_features(url):

    features = []

    parsed = urlparse(url)

    # 1 IP address check
    if parsed.hostname.replace(".", "").isdigit():
        features.append(1)
    else:
        features.append(0)

    # 2 URL length
    if len(url) > 75:
        features.append(1)
    else:
        features.append(0)

    # 3 @ symbol
    if "@" in url:
        features.append(1)
    else:
        features.append(0)

    # 4 hyphen in domain
    if "-" in parsed.netloc:
        features.append(1)
    else:
        features.append(0)

    # 5 https check
    if parsed.scheme == "https":
        features.append(0)
    else:
        features.append(1)

    # Fill remaining features with 0
    while len(features) < 30:
        features.append(0)

    return features