**Proposal to include QIP Smart Contract**

**Proposal**  
Allow QIP Smart Contract to be deployed on Qubic.

**Available Options**

- **Option 1:** Yes allow  
- **Option 2:** Don’t Allow.

---

**What is QIP?**

QIP (Qubic ICO Portal) is a smart contract that enables **token issuers to conduct a structured, multi-phase ICO** directly on the Qubic network. It allows creators to define up to 3 sale phases with different prices and supply caps, distribute proceeds to up to 10 recipient addresses, and automatically handle unsold tokens.

---

**What problem does QIP solve?**

Before QIP, Qubic had no native, standardized, or secure way to run **ICOs or token presales**. Projects had to rely on off-chain coordination or custom contracts with high risk of bugs, mismanagement, or unfair distribution.

QIP solves this by providing:

- A **trusted, audited, and reusable ICO framework**  
- **Transparent phase-based pricing and supply control**  
- **Automatic distribution of funds** to team, treasury, or partners  
- **Built-in rollover of unsold tokens** between phases  
- **Return of unsold tokens** to the creator after final phase  
- **No need for external escrow or manual transfers**

---

**User Flow**

1. **Issuer** creates an asset (e.g., 1,000,000 "MYTOKEN") using QX contract  
2. **Issuer** transfers full supply + management rights to QIP contract  
3. **Issuer** calls `createICO()` with:  
   - 3 sale phases (amounts, prices)  
   - 10 payout addresses + percentages (must sum ≤ 100%)  
   - Start epoch  
4. At `startEpoch`, Phase 1 begins  
5. **Buyers** call `buyToken()` → pay in energy → receive tokens instantly  
6. **95% of funds** go to the 10 defined addresses (per %)  
7. **5% remains in contract** (for future dividend use or burn)  
8. At end of each phase: unsold tokens roll over to next phase  
9. After Phase 3: unsold tokens return to creator, ICO is removed  

---

**Technical Implementation**

```cpp
// Key functions
createICO()        → sets phases, prices, recipients, start epoch
buyToken()         → validates phase, price, supply; transfers tokens
endEpoch()         → rolls over unsold tokens or returns to creator

// Distribution logic (from buyToken tests)
totalPayment = amount * currentPrice
for i=1 to 10:
    payout[i] = (totalPayment * percent[i]) / 100
remaining = totalPayment - sum(payouts)  // ~5%
contractBalance += remaining             // held for dividends/burn
```

- Uses **QX asset system** for token issuance & transfer  
- Manages **share ownership and possession** via QX integration  
- **No external dependencies** — fully on-chain  
- **Tested with 20+ edge cases**: invalid epochs, prices, percentages, overflow  
- **Secure by design**: only creator can set ICO, only during valid phases can buy  

---

**Why deploy QIP on Qubic?**

- Enables **real token sales** on a feeless, instant network  
- Reduces **project launch friction**  
- Increases **ecosystem activity and asset creation**  
- Provides **fair, transparent fundraising** for all projects  

---

**Vote: Option 1 – Yes allow**  
Let Qubic become the home of secure, native ICOs.