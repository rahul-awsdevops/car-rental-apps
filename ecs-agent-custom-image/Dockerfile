FROM jenkins/inbound-agent:latest

USER root

# openjdk-17-jdk is already installed in base image

# Install dependencies in one layer
RUN apt-get update && apt-get install -y  \
    docker.io \
    git \
    unzip \
    curl \
    jq \
    nodejs \
    npm \
    ca-certificates \
    gnupg \
    wget \
    && rm -rf /var/lib/apt/lists/*

# Install AWS CLI v2
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
    && unzip awscliv2.zip \
    && ./aws/install \
    && rm -rf awscliv2.zip aws

# Install kubectl v1.31.3 for AWS EKS 
RUN curl -LO https://s3.us-west-2.amazonaws.com/amazon-eks/1.31.3/2024-12-12/bin/linux/amd64/kubectl && \
    chmod +x ./kubectl && \
    mv ./kubectl /usr/local/bin/kubectl

# Install Trivy using .deb file
RUN wget https://github.com/aquasecurity/trivy/releases/download/v0.60.0/trivy_0.60.0_Linux-64bit.deb && \
    dpkg -i trivy_0.60.0_Linux-64bit.deb && \
    rm trivy_0.60.0_Linux-64bit.deb



# Install SonarQube Scanner
RUN curl -Lo sonarqube.zip https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-5.0.1.3006-linux.zip \
    && unzip sonarqube.zip \
    && mv sonar-scanner-5.0.1.3006-linux /opt/sonar-scanner \
    && ln -s /opt/sonar-scanner/bin/sonar-scanner /usr/local/bin/sonar-scanner \
    && rm sonarqube.zip

# Set Docker socket permissions
RUN usermod -aG docker jenkins

USER jenkins