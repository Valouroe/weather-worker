# Use official Python image
FROM python:3.9

# Set working directory inside the container
WORKDIR /app

# Copy project files into container
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Install Nginx
# RUN apt update && apt install -y nginx

# Expose port 5000 for Flask
EXPOSE 5000

# Run Flask app
CMD ["python", "app.py"]