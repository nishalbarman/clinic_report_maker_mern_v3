function PaymentTransactions() {
  return (
    <div style={{ overflowX: "auto" }}>
      <table id="customers">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>S. No.</th>
            <th style={{ textAlign: "center", width: "15%" }}>Name</th>
            <th style={{ textAlign: "center" }}>Status</th>
            <th style={{ textAlign: "center" }}>Amount</th>
            <th style={{ textAlign: "center" }}>Transaction ID</th>
            <th style={{ textAlign: "center" }}>PDF Created</th>
            <th style={{ textAlign: "center", fontWeight: "bold" }}>
              On Server
            </th>
            <th style={{ textAlign: "center" }}>Report Name</th>
            <th style={{ textAlign: "center" }}>Generate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: "center" }}>{"file.serial"}</td>
            <td style={{ textAlign: "left" }}>{"file.name"}</td>
            <td style={{ textAlign: "center" }}>{"file.status"}</td>
            <td style={{ textAlign: "center" }}>{"file.amount"}</td>
            <td style={{ textAlign: "center" }}>{"file.transaction_id"}</td>
            <td style={{ textAlign: "center" }}>{"file.pdf_created"}</td>
            <td style={{ textAlign: "center" }}>{"file.pdf_onserver"}</td>
            <td style={{ textAlign: "center" }}>{"file.report_name"}</td>
            <td
              style={{ textAlign: "center", fontSize: 14 }}
              className="file_name">
              <form
                action={`/core/engine/main_engine.php`}
                method="POST"
                name="payuForm">
                <input type="hidden" name="link" value={"file.encoded_value"} />
                <input
                  type="hidden"
                  name="txnid"
                  value={"file.transaction_id"}
                />
                <input type="hidden" name="name" value={"file.name"} />
                <input type="hidden" name="address1" value={"file.serial"} />
                <input type="hidden" name="delete" value={""} />
                <input type="submit" name="create" value="Generate" />
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PaymentTransactions;
