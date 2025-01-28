package br.com.estudos.paginacao.service.response;

import java.time.LocalDateTime;

public class Response {

	private String message;
	private int status;
	private LocalDateTime timestamp;

	public Response() {
	}

	public Response(String message, int status) {
		this.message = message;
		this.status = status;

		this.timestamp = LocalDateTime.now();
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public LocalDateTime getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(LocalDateTime timestamp) {
		this.timestamp = timestamp;
	}
}
